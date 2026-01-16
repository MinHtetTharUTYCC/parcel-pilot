import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PickupReminderCron } from './cron/pick-up-reminder.cron';
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { WebNotificationsService } from './services/web-notifications.service';
import { ReqUser } from 'src/auth/decorators/req-user.decorator';
import { RequestUser } from 'src/auth/interfaces/auth.interface';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('notifications')
@UseInterceptors(SuccessResponseInterceptor)
export class NotificationsController {
    constructor(
        private pickupReminderCron: PickupReminderCron,
        private webNotificationsService: WebNotificationsService,
    ) { }

    @Post('test-pickup-reminders')
    async testPickupReminders() {
        await this.pickupReminderCron.triggerManually();
        return 'Pickup reminder job triggered';
    }

    @Get()
    @Auth('RESIDENT')
    async getNofifications(@ReqUser() user: RequestUser, @Body() dto: PaginationDto) {
        await this.webNotificationsService.getNotifications(user.sub, dto)

    }
}
