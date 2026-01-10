import { Controller, Get, Post, Param, Body, Req, UseInterceptors, Query, Patch } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ReqUser } from 'src/auth/decorators/req-user.decorator';
import * as authInterfaces from 'src/auth/interfaces/auth.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateParcelDTo } from './dto/create-parel.dto';
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { UpdateParcelStatusDto } from './dto/update-parcel-status.dto';

@Controller('parcels')
@UseInterceptors(SuccessResponseInterceptor)
export class ParcelsController {
	constructor(private readonly parcelsService: ParcelsService) { }

	@Get()
	@Auth('STAFF', 'MANAGER')
	getAllParcel(@Query('cursor') cursor: string, @Query('limit') limit: number) {
		return this.parcelsService.getParcels(cursor, limit);
	}

	@Get('my-parcels')
	@Auth('RESIDENT')
	getMyParcels(@ReqUser() user: authInterfaces.RequestUser, @Query('cursor') cursor: string, @Query('limit') limit: number) {
		return this.parcelsService.getMyParcels(user.sub, cursor, limit);
	}

	@Get('/:id')
	@Auth('RESIDENT', 'STAFF', 'MANAGER')
	getParcel(@ReqUser() user: authInterfaces.RequestUser, @Param('id') id: string,) {
		return this.parcelsService.getParcel(user, id);
	}


	@Post()
	@Auth('STAFF', 'MANAGER')
	createParcel(@Body() dto: CreateParcelDTo, @Req() user: authInterfaces.RequestUser) {
		return this.parcelsService.createParcel(dto, user.sub);
	}

	@Patch(':id')
	@Auth('STAFF', 'MANAGER')
	updateParcel(
		@Param('id') id: string,
		@Body() dto: UpdateParcelDto,
		@ReqUser() user: authInterfaces.RequestUser
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
}
