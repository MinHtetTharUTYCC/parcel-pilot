import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ParcelEventsListner } from './listeners/parcel-events.listner';
import { NotificationsService } from './services/notifications.service';
import { WebNotificationsService } from './services/web-notifications.service';
import { BullModule } from '@nestjs/bullmq';
import { EmailNotificationsProcessor } from './queues/processors/email.processor';
import { ParcelsModule } from 'src/parcels/parcels.module';

@Module({
    imports: [DatabaseModule, BullModule.registerQueue({ name: "notifications" }), ParcelsModule],
    controllers: [NotificationsController],
    providers: [NotificationsService, WebNotificationsService, ParcelEventsListner, EmailNotificationsProcessor],
    exports: [NotificationsService, WebNotificationsService]
})
export class NotificationsModule { }

