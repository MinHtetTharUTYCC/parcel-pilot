import { Injectable,NotFoundException } from '@nestjs/common';

@Injectable()
export class ParcelsService {
	private allParcels = [
		{ id: 1, name: 'Min' },
		{ id: 2, name: 'Htet' },
	];

	createParcel(name: string) {
		const lastId =
			this.allParcels.length > 0
				? this.allParcels[this.allParcels.length - 1].id
				: 0;

		const newId = lastId + 1;
		const newParcel = { id: newId, name };
		this.allParcels.push(newParcel);

		return newParcel;
	}

	updateParcel(id: number, name: string) {
		const parcel = this.allParcels.find((p) => p.id === id);

		if (!parcel) return null;
		parcel.name = name;

		return parcel;
	}

	getAllParcels() {
		return { data: this.allParcels, meta: {} };
	}

	getParcel(id: number) {
		const parcel = this.allParcels.find((p) => p.id === id) ?? null;
		if(!parcel) throw new NotFoundException("Parcel not found");
		return parcel;
	}

	deleteParcel(id: number) {
		this.allParcels = this.allParcels.filter((p) => p.id !== id);
		return { message: 'Delted successfully', id };
	}
}
