import { Controller, Get, Post, Param, Body, UseInterceptors, Query, Patch, Delete } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ReqUser } from 'src/auth/decorators/req-user.decorator';
import * as authInterfaces from 'src/auth/interfaces/auth.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateParcelDTo } from './dto/create-parel.dto';
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { UpdateParcelStatusDto } from './dto/update-parcel-status.dto';
import { GetParcelsFilterDto } from './dto/get-parcels.filter.dto';

@Controller('parcels')
@UseInterceptors(SuccessResponseInterceptor)
export class ParcelsController {
	constructor(private readonly parcelsService: ParcelsService) { }

	@Get()
	@Auth('STAFF', 'MANAGER')
	getAllParcels(@Query() dto: GetParcelsFilterDto) {
		return this.parcelsService.getParcels(dto);
	}

	@Get('mine')
	@Auth('RESIDENT')
	getMyParcels(@ReqUser() user: authInterfaces.RequestUser, dto: GetParcelsFilterDto) {
		return this.parcelsService.getMyParcels(user.sub, dto);
	}

	@Get('/:id')
	@Auth('RESIDENT', 'STAFF', 'MANAGER')
	getParcel(@ReqUser() user: authInterfaces.RequestUser, @Param('id') id: string,) {
		return this.parcelsService.getParcel(user, id);
	}

	@Post()
	@Auth('STAFF', 'MANAGER')
	createParcel(@Body() dto: CreateParcelDTo, @ReqUser() user: authInterfaces.RequestUser) {
		return this.parcelsService.createParcel(dto, user.sub);
	}

	@Patch(':id')
	@Auth('STAFF', 'MANAGER')
	updateParcel(
		@Param('id') id: string,
		@Body() dto: UpdateParcelDto,
	) {
		return this.parcelsService.updateParcel(dto, id);
	}

	@Patch(':id/status')
	@Auth('STAFF', 'MANAGER')
	updateStatus(
		@Param('id') id: string,
		@Body('status') dto: UpdateParcelStatusDto,
	) {
		return this.parcelsService.updateParcelStatus(id, dto.status);
	}

	@Delete()
	@Auth('STAFF', 'MANAGER')
	deleteParcel(@Body() { parcelId }: { parcelId: string }) {
		return this.parcelsService.deleteParcel(parcelId)
	}
}
