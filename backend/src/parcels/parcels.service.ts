import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateParcelDto } from './dto/create-parel.dto';
import { generatePickupCode } from 'src/common/utils';
import { ParcelStatus, Prisma } from '@prisma/client';
import { RequestUser } from 'src/auth/interfaces/auth.interface';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { GetParcelsFilterDto } from './dto/get-parcels.filter.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ParcelRegisteredEvent } from 'src/notifications/events/parcel-registered.event';
import { ParcelPickedupEvent } from 'src/notifications/events/parcel-pickedup.event';
import { ParcelReturnedEvent } from 'src/notifications/events/parcal-returned.event';

@Injectable()
export class ParcelsService {
	private logger = new Logger(ParcelsService.name);

	constructor(
		private databaseService: DatabaseService,
		private eventEmiiter: EventEmitter2,
	) { }

	async getParcels(dto: GetParcelsFilterDto) {
		const { cursor, limit, q } = dto;
		const whereCondition: Prisma.ParcelWhereInput = {};

		// registered date cursor
		if (cursor) {
			whereCondition.registeredAt = { lt: new Date(cursor) }
		};

		// search
		if (q) {
			whereCondition.OR = [
				{ pickupCode: { contains: q, mode: 'insensitive' } },
				{ orderId: { contains: q, mode: 'insensitive' } },
				{ courier: { contains: q, mode: 'insensitive' } },
				{ description: { contains: q, mode: 'insensitive' } },

				{
					recipient: {
						OR: [
							{ unitNumber: { contains: q, mode: 'insensitive' } },
							{ name: { contains: q, mode: 'insensitive' } },
							{ email: { contains: q, mode: 'insensitive' } },
							{ phone: { contains: q, mode: 'insensitive' } },
						]
					}
				}
			]
		}

		const parcels = await this.databaseService.parcel.findMany({
			where: whereCondition,
			take: limit + 1,
			orderBy: { registeredAt: 'desc' },
			include: {
				recipient: {
					select: {
						name: true,
						unitNumber: true,
					}
				}
			}
		});

		const hasNext = parcels.length > limit;
		const items = hasNext ? parcels.slice(0, -1) : parcels;
		const nextCursor = hasNext ? items[items.length - 1].registeredAt.toISOString() : null;

		return {
			data: items,
			meta: { limit, hasNext, nextCursor }
		};
	}

	async getMyParcels(userId: string, dto: GetParcelsFilterDto) {
		const { cursor, limit, q } = dto;

		// ownership
		const whereCondition: Prisma.ParcelWhereInput = {
			recipientId: userId
		};

		// registered date cursor
		if (cursor) {
			whereCondition.registeredAt = { lt: new Date(cursor) };
		}

		// search
		if (q) {
			whereCondition.OR = [
				{ pickupCode: { contains: q, mode: 'insensitive' } },
				{ orderId: { contains: q, mode: 'insensitive' } },
				{ courier: { contains: q, mode: 'insensitive' } },
				{ description: { contains: q, mode: 'insensitive' } },
			];
		}

		const parcels = await this.databaseService.parcel.findMany({
			where: whereCondition,
			take: limit + 1,
			orderBy: {
				registeredAt: 'desc',
			},
			include: {
				recipient: {
					select: {
						name: true,
						unitNumber: true,
					}
				}
			}
		});

		const hasNext = parcels.length > limit;
		const items = hasNext ? parcels.slice(0, -1) : parcels;
		const nextCursor = hasNext ? items[items.length - 1].registeredAt.toISOString() : null;

		return {
			data: items,
			meta: { limit, hasNext, nextCursor }
		};
	}

	async getParcel(user: RequestUser, parcelId: string) {
		const whereClause = user.role === 'RESIDENT' ? { id: parcelId, recipientId: user.sub } : { id: parcelId };

		const parcel = await this.databaseService.parcel.findUnique({
			where: whereClause,
			include: this.getIncludeForParcel(user.role),
		});

		if (!parcel) {
			throw new NotFoundException("Parcel not found or access denied");
		}

		return parcel;
	}

	private getIncludeForParcel(role: string): Prisma.ParcelInclude {
		const baseInclude = {
			recipient: { select: { name: true, unitNumber: true } }
		};

		switch (role) {
			case 'STAFF':
			case 'MANAGER':
				return {
					...baseInclude,
					receivedBy: { select: { name: true, email: true } },
					pickupLogs: { orderBy: { createdAt: 'desc' } }
				};

			case 'RESIDENT':
				return baseInclude;

			default:
				return baseInclude;
		}
	}

	async createParcel(dto: CreateParcelDto, userId: string) {
		const pickupCode = generatePickupCode();
		const { recipientId, ...restOfDto } = dto;
		try {
			const parcel = await this.databaseService.parcel.create({
				data: {
					...restOfDto,
					recipient: {
						connect: { id: recipientId }
					},
					receivedBy: {
						connect: { id: userId }
					},
					pickupCode,
				},
				select: {
					id: true,
					recipientId: true,
					recipient: {
						select: {
							name: true,
							email: true,
							unitNumber: true,
						}
					},
					pickupCode: true,
					courier: true,
					registeredAt: true,
				}
			});

			const parcelRegisteredEvent: ParcelRegisteredEvent = {
				recipientId: parcel.recipientId,
				parcelId: parcel.id,
				recipientName: parcel.recipient.name,
				residentEmail: parcel.recipient.email,
				unitNumber: parcel.recipient.unitNumber,
				pickupCode: parcel.pickupCode,
				courier: parcel.courier,
				registeredAt: parcel.registeredAt,
			}

			this.eventEmiiter.emit("parcel.registered", parcelRegisteredEvent);

			return parcel;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === "P2025") {
					throw new NotFoundException("User Not Found")
				}
			}

			throw error;
		}
	}

	async updateParcel(dto: UpdateParcelDto, parcelId: string) {
		try {
			await this.databaseService.parcel.update({
				where: { id: parcelId },
				data: { ...dto },

			});

			return { parcelId }
		} catch (error: unknown) {
			if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
				throw new NotFoundException("Parcel not found")
			}
			throw error;
		}
	}

	async updateParcelStatus(parcelId: string, status: ParcelStatus, notifyResident = false) {
		console.log(status)
		try {
			const parcel = await this.databaseService.parcel.update({
				where: { id: parcelId },
				data: { status: status },
				select: {
					id: true,
					recipientId: true,
					recipient: {
						select: {
							name: true,
							email: true,
							unitNumber: true,
						}
					},
					pickupCode: true,
					courier: true,
					pickedUpAt: true,
					returnedAt: true,

				}
			});


			if (notifyResident) {
				console.log(notifyResident)
				switch (status) {
					case ParcelStatus.PICKED_UP:
						console.log("picked_up")

						const parcelPickedupEvent: ParcelPickedupEvent = {
							recipientId: parcel.recipientId,
							parcelId: parcel.id,
							recipientName: parcel.recipient.name,
							residentEmail: parcel.recipient.email,
							unitNumber: parcel.recipient.unitNumber,
							pickupCode: parcel.pickupCode,
							courier: parcel.courier,
							pickedupAt: parcel.pickedUpAt,
						};

						this.eventEmiiter.emit("parcel.pickedup", parcelPickedupEvent)
						break;

					case ParcelStatus.RETURNED:
						const parcelReturnedEvent: ParcelReturnedEvent = {
							recipientId: parcel.recipientId,
							parcelId: parcel.id,
							recipientName: parcel.recipient.name,
							residentEmail: parcel.recipient.email,
							unitNumber: parcel.recipient.unitNumber,
							pickupCode: parcel.pickupCode,
							courier: parcel.courier,
							returnedAt: parcel.returnedAt,
						};

						this.eventEmiiter.emit("parcel.returned", parcelReturnedEvent)
						break;
				}
			}

			return { parcelId, status }
		} catch (error: unknown) {
			if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
				throw new NotFoundException("Parcel not found")
			}
			throw error;
		}
	}

	async deleteParcel(parcelId: string) {
		try {
			await this.databaseService.parcel.delete({ where: { id: parcelId } })
			return { parcelId };
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
				throw new NotFoundException("Parcel not found")
			}
		}
	}

}
