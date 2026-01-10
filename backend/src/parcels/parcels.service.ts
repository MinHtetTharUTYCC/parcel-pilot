import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateParcelDTo } from './dto/create-parel.dto';
import { generatePickupCode } from 'src/common/utils';
import { ParcelStatus, Prisma } from '@prisma/client';
import { RequestUser } from 'src/auth/interfaces/auth.interface';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { UpdateParcelStatusDto } from './dto/update-parcel-status.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

@Injectable()
export class ParcelsService {
	constructor(private readonly databaseService: DatabaseService) { }

	async getParcels(cursor?: string, limit = 10) {
		const cursorCondition: Prisma.ParcelWhereInput = cursor ? { registeredAt: { lt: new Date(cursor) } } : {};

		const parcels = await this.databaseService.parcel.findMany({
			where: cursorCondition,
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

	async getMyParcels(userId: string, cursor?: string, limit = 10) {
		const cursorCondition: Prisma.ParcelWhereInput = cursor ? {
			AND: [
				{ recipientId: userId },
				{ registeredAt: { lt: new Date(cursor) } }
			]
		} : { recipientId: userId }

		const parcels = await this.databaseService.parcel.findMany({
			where: cursorCondition,
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

	async createParcel(dto: CreateParcelDTo, userId: string) {
		const pickupCode = generatePickupCode();
		const { recipientId, ...createDto } = dto;
		try {
			const parcel = await this.databaseService.parcel.create({
				data: {
					...createDto,
					receivedById: userId,
					pickupCode,
					recipient: {
						connect: { id: recipientId },
					},
				}
			});

			return parcel;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === "P2003") {
					throw new NotFoundException("Resident Not Found")
				}
			}

			throw error;
		}
	}

	async updateParcel(dto: UpdateParcelDto, parcelId: string) {
		await this.databaseService.parcel.update({
			where: { id: parcelId },
			data: { ...dto }
		});

		return "Updated parcel successfully"
	}

	async updateParcelStatus(parcelId: string, status: ParcelStatus) {
		await this.databaseService.parcel.update({
			where: { id: parcelId },
			data: { status: status }
		});

		return "Updated parcel status successfully"
	}

}
