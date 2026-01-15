import { Controller, Get, Post, Param, Body, UseInterceptors, Query, Patch, Delete } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ReqUser } from 'src/auth/decorators/req-user.decorator';
import * as authInterfaces from 'src/auth/interfaces/auth.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateParcelDto } from './dto/create-parel.dto';
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
	getMyParcels(@ReqUser() user: authInterfaces.RequestUser, @Query() dto: GetParcelsFilterDto) {
		return this.parcelsService.getMyParcels(user.sub, dto);
	}

	@Get('/:id')
	@Auth('RESIDENT', 'STAFF', 'MANAGER')
	getParcel(@ReqUser() user: authInterfaces.RequestUser, @Param('id') id: string,) {
		return this.parcelsService.getParcel(user, id);
	}

	@Post()
	@Auth('STAFF', 'MANAGER')
	createParcel(@Body() dto: CreateParcelDto, @ReqUser() user: authInterfaces.RequestUser) {
		return this.parcelsService.createParcel(dto, user.sub);
	}

	@Patch('pickup/:id')
	@Auth('STAFF', 'MANAGER')
	pickupParcel(
		@Param('id') id: string,
	) {
		return this.parcelsService.pickupParcel(id);
	}

	@Patch('return/:id')
	@Auth('STAFF', 'MANAGER')
	returnParcel(
		@Param('id') id: string,
	) {
		return this.parcelsService.returnParcel(id);
	}

	@Patch(':id')
	@Auth('STAFF', 'MANAGER')
	updateParcel(
		@Param('id') id: string,
		@Body() dto: UpdateParcelDto,
	) {
		return this.parcelsService.updateParcel(dto, id);
	}


	@Delete(':id')
	@Auth('STAFF', 'MANAGER')
	deleteParcel(@Param('id') id: string) {
		return this.parcelsService.deleteParcel(id);
	}
}
