import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { EmailJob, NotificationPayload, WebJob } from "../interfaces/notification-payload.interface";
import { NotificationChannel, NotificationPriority } from "../enums/nofiication-type.enum";
import { WebNotificationsService } from "./web-notifications.service";
import { CreateWebNotificationDto } from "./dto/create-web-notification.dto";
import { getActionUrl, getMessage, getTile } from "src/common/notifications/noti-info";

@Injectable()
export class NotificationsService {
    constructor(
        private webNotificationService: WebNotificationsService,
        @InjectQueue('notifications') private notificationsQueue,
    ) {
    }
    async sendNotification(payload: NotificationPayload, useQueue: boolean = false) {
        if (payload.channels.includes(NotificationChannel.EMAIL)) {
            const emailJob: EmailJob = {
                type: payload.type,
                userId: payload.userId,
                parcelId: payload.parcelId,
                email: payload.email,
                data: payload.data,
                actionUrl: getActionUrl(payload.type, payload.parcelId),
            }

            await this.notificationsQueue.add(
                'send-email',
                emailJob,
                { attempts: 3, backoff: 5000, priority: payload.priority === NotificationPriority.HIGH ? 1 : 3 })
        }

        if (payload.channels.includes(NotificationChannel.WEB)) {
            const createWebNotiDto: CreateWebNotificationDto = {
                userId: payload.userId,
                type: payload.type,
                title: getTile(payload.type),
                message: getMessage(payload),
                actionUrl: getActionUrl(payload.type, payload.parcelId),
            }

            if (useQueue) {
                const webJob: WebJob = createWebNotiDto;
                await this.notificationsQueue.add(
                    'send-web',
                    webJob, {
                    attempts: 3, backoff: 5000, priority: payload.priority === NotificationPriority.HIGH ? 1 : 3,
                });
            } else {
                await this.webNotificationService.create(createWebNotiDto);
            }
        }
    }
}