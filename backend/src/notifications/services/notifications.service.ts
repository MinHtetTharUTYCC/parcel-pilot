import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { EmailJob, NotificationPayload } from "../interfaces/notification-payload.interface";
import { NotificationType } from "@prisma/client";
import { NotificationChannel, NotificationPriority } from "../enums/nofiication-type.enum";
import { WebNotificationsService } from "./web-notifications.service";
import { CreateWebNotificationDto } from "./dto/create-web-notification.dto";

const TEST_EMAIL = process.env.RESEND_TEST_EMAIL;

@Injectable()
export class NotificationsService {
    constructor(
        private webNotification: WebNotificationsService,
        // private emailNotification: EmailNotificationsService,
        @InjectQueue('notifications') private notificationsQueue,
    ) {
    }
    async sendNotification(payload: NotificationPayload) {

        const createWebNotiDto: CreateWebNotificationDto = {
            userId: payload.userId,
            type: payload.type,
            title: this.getTile(payload.type),
            message: this.getMessage(payload),
            actionUrl: this.getActionUrl(payload.type, payload.parcelId),
        }

        const webNoti = await this.webNotification.create(createWebNotiDto);

        const emailJob: EmailJob = {
            type: payload.type,
            userId: payload.userId,
            parcelId: payload.parcelId,
            // TODO:
            // email: await this.usersService.getUserEmail(payload.userId),
            email: TEST_EMAIL,
            data: payload.data,
            actionUrl: this.getActionUrl(payload.type, payload.parcelId),
        }

        if (payload.channels.includes(NotificationChannel.EMAIL)) {
            const t = new Date().getMilliseconds();
            await this.notificationsQueue.add(
                'send-email',
                emailJob,
                { attempts: 3, backoff: 5000, priority: payload.priority === NotificationPriority.HIGH ? 1 : 3 })
        }

        return webNoti;
    }

    private getTile(type: NotificationType) {
        switch (type) {
            case NotificationType.PARCEL_READY:
                return "Your parcel is ready to pickup";
            case NotificationType.PARCEL_PICKED_UP:
                return "Your parcel is picked up successfully";
            case NotificationType.PICKUP_REMINDER:
                return "Your need to pick up your parcel!";
            case NotificationType.ACCOUNT_APPROVED:
                return "Your resident account is approved";
            case NotificationType.ACCOUNT_REJECTED:
                return "Your resident account is rejected!";
            default:
                return "new Message";
        }

    }

    private getMessage(payload: NotificationPayload) {
        switch (payload.type) {
            case NotificationType.PARCEL_READY:
                return `Pickup code: ${payload.data.pickupCode}`;
            case NotificationType.PARCEL_PICKED_UP:
                return "Your parcel is picked up successfully";
            case NotificationType.PICKUP_REMINDER:
                return `Pickup code: ${payload.data.pickupCode}`;
            case NotificationType.ACCOUNT_APPROVED:
                return "You can now login your resident account";
            case NotificationType.ACCOUNT_REJECTED:
                return "Contact frontdesk for further assistant";
            default:
                return "New Message";
        }
    }

    private getActionUrl(type: NotificationType, parcelId?: string): string | undefined {
        switch (type) {
            case "PARCEL_READY":
            case "PARCEL_PICKED_UP":
            case "PICKUP_REMINDER":
                if (parcelId) {
                    return `/parcels/${parcelId}`
                }
        }

        return undefined;
    }
}