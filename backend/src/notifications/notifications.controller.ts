import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { PickupReminderCron } from './cron/pick-up-reminder.cron';
import { SuccessResponseInterceptor } from 'src/common/interceptors/success-response.interceptor';

@Controller('notifications')
@UseInterceptors(SuccessResponseInterceptor)
export class NotificationsController {
    constructor(
        private pickupReminderCron: PickupReminderCron,
    ) { }

    @Post('test-pickup-reminders')
    async testPickupReminders() {
        await this.pickupReminderCron.triggerManually();
        return 'Pickup reminder job triggered';
    }
}
