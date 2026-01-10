import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateParcelDTo } from './dto/create-parel.dto';
import { generatePickupCode } from 'src/common/utils';
import { Prisma } from 'src/generated/client';

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

	async getParcel(userId: string, id: string) {
		throw new Error('Method not implemented.');
	}

	async createParcel(dto: CreateParcelDTo, userId: string) {
		const pickupCode = generatePickupCode();
		const parcel = await this.databaseService.parcel.create({
			data: {
				...dto,
				receivedById: userId,
				pickupCode,

			}
		});

		return parcel;
	}

}
