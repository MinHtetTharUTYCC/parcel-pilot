import { Controller, Get, Post, Param, Body, Req, UseInterceptors, Query } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ReqUser } from 'src/auth/decorators/req-user.decorator';
import { RequestUser } from 'src/auth/interfaces/request-user.interface';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateParcelDTo } from './dto/create-parel.dto';
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';

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
	getMyParcels(@ReqUser() user: RequestUser, @Query('cursor') cursor: string, @Query('limit') limit: number) {
		return this.parcelsService.getMyParcels(user.sub, cursor, limit);
	}

	@Get('/:id')
	getParcel(@ReqUser() user: RequestUser, @Param('id') id: string,) {
		return this.parcelsService.getParcel(user.sub, id);
	}

	@Post()
	@Auth('STAFF', 'MANAGER')
	createParcel(@Body() dto: CreateParcelDTo, @Req() user: RequestUser) {
		this.parcelsService.createParcel(dto, user.sub);
	}
}
