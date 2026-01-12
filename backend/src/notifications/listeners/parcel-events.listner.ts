import { Injectable, Logger } from "@nestjs/common";
import { NotificationsService } from "../services/notifications.service";
import { NotificationType } from "@prisma/client";
import { OnEvent } from "@nestjs/event-emitter"
import { NotificationChannel, NotificationPriority } from "../enums/nofiication-type.enum";
import { ParcelRegisteredEvent } from "../events/parcel-registered.event";

@Injectable()
export class ParcelEventsListner {

    constructor(private notificationsService: NotificationsService) { }

    @OnEvent('parcel.registered')
    async handleParcelRegistered(payload: ParcelRegisteredEvent) {

        const notificationData = {
            recipientName: payload.recipientName,
            unitNumber: payload.unitNumber,
            pickupCode: payload.pickupCode,
            courier: payload.courier,
            registeredAt: payload.registeredAt,
        }

        await this.notificationsService.sendNotification({
            type: NotificationType.PARCEL_READY,
            userId: payload.recipientId,
            parcelId: payload.parcelId,
            data: notificationData,
            channels: [NotificationChannel.EMAIL, NotificationChannel.WEB],
            priority: NotificationPriority.LOW,
        }, false);
    }
}