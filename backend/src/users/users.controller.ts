import { Controller, Get, Param, Patch, Query, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ResidentFilterDto } from './dto/resident-filter.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('users')
@UseInterceptors(SuccessResponseInterceptor)
@UseInterceptors(SuccessResponseInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Patch(":id/approve")
    approveResident(@Param('id') id: string) {
        return this.usersService.approveResident(id);
    }

    @Get('residents')
    @Auth('STAFF', 'MANAGER')
    getResidents(@Query() dto: ResidentFilterDto) {
        return this.usersService.getResidents(dto);
    }

    @Get('staffs')
    @Auth('MANAGER')
    getStaffs(@Query() dto: PaginationDto) {
        return this.usersService.getStaffs(dto);
    }
}
