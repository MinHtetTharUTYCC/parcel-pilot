import { Injectable } from "@nestjs/common";
import { NotificationsService } from "../services/notifications.service";
import { OnEvent } from "@nestjs/event-emitter";
import { events } from "src/common/consts/event-names";
import { ResidentApprovedEvent } from "../events/resident-approved.event";
import { NotificationType } from "@prisma/client";
import { NotificationChannel, NotificationPriority } from "../enums/nofiication-type.enum";
import { NotificationData } from "../interfaces/notification-payload.interface";

@Injectable()
export class ResidentEventsListener {
    constructor(private notificationsService: NotificationsService) { }


    @OnEvent(events.approved)
    async handleResidentApproved(payload: ResidentApprovedEvent) {

        console.log("PYYY", payload)

        const notificationData = {
            recipientName: payload.recipientName,
            unitNumber: payload.unitNumber,
            approvedAt: payload.approvedAt,
        } as NotificationData;

        this.notificationsService.sendNotification({
            type: NotificationType.ACCOUNT_APPROVED,
            userId: payload.recipientId,
            residentEmail: payload.residentEmail,
            data: notificationData,
            channels: [NotificationChannel.EMAIL],
            priority: NotificationPriority.HIGH
        })

    }

}