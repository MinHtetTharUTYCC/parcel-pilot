import { Injectable, Logger } from "@nestjs/common";
import { NotificationsService } from "../services/notifications.service";
import { NotificationType } from "@prisma/client";
import { OnEvent } from "@nestjs/event-emitter"
import { NotificationChannel, NotificationPriority } from "../enums/nofiication-type.enum";
import { ParcelRegisteredEvent } from "../events/parcel-registered.event";
import { ParcelsService } from "src/parcels/parcels.service";

@Injectable()
export class ParcelEventsListner {
    private readonly logger = new Logger(ParcelEventsListner.name);

    constructor(
        private notificationsService: NotificationsService,
        private parcelsService: ParcelsService,
    ) { }

    @OnEvent('parcel.registered')
    async handleParcelRegistered(payload: ParcelRegisteredEvent) {

        const notificationData = {
            recipientName: payload.recipientName,
            unitNumber: payload.unitNumber,
            pickupCode: payload.pickupCode,
            courier: payload.courier,
            registeredAt: payload.registeredAt,
        }

        const notificationResult = await this.notificationsService.sendNotification({
            type: NotificationType.PARCEL_READY,
            userId: payload.recipientId,
            parcelId: payload.parcelId,
            data: notificationData,
            channels: [NotificationChannel.EMAIL, NotificationChannel.WEB],
            priority: NotificationPriority.LOW,
        });

        if (notificationResult) {
            this.logger.log("Success")
            await this.parcelsService.updateParcelStatus(payload.parcelId, "READY_FOR_PICKUP").catch((error) => {
                this.logger.error(`Failed to update parcel status for ${payload.parcelId} After sending email: `, error);
            });
        } else {
            this.logger.error("Failed")
        }
    }
}