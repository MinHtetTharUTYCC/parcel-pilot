import { Controller, Get, Post,Param } from '@nestjs/common';
import { ParcelsService } from './parcels.service';

@Controller('parcels')
export class ParcelsController {
	constructor(private readonly parcelsService: ParcelsService) {}

	@Get()
	getParcels() {
		return this.parcelsService.getAllParcels();
	}

	@Get('/:id')
	getParcel(@Param('id') id: string) {
		return this.parcelsService.getParcel(parseInt(id));
	}

	@Post()
	createParcel(name: string) {
		this.parcelsService.createParcel(name);
	}
}
