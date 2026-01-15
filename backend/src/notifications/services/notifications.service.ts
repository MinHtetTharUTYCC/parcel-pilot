import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { EmailJob, NotificationPayload, WebJob } from "../interfaces/notification-payload.interface";
import { NotificationChannel, NotificationPriority } from "../enums/notification-type.enum";
import { WebNotificationsService } from "./web-notifications.service";
import { CreateWebNotificationDto } from "./dto/create-web-notification.dto";
import { getActionUrl, getMessage, getTitle } from "src/common/notifications/noti-info";

@Injectable()
export class NotificationsService {
    constructor(
        private webNotificationService: WebNotificationsService,
        @InjectQueue('email-notifications') private emailQueue,
        @InjectQueue('web-notifications') private webQueue,
    ) { }


    async sendNotification(payload: NotificationPayload, useQueue: boolean = false) {
        console.log("📤 Adding job to queue...");
        if (payload.channels.includes(NotificationChannel.EMAIL)) {
            const emailJob: EmailJob = {
                type: payload.type,
                userId: payload.userId,
                parcelId: payload.parcelId,
                residentEmail: payload.residentEmail,
                data: payload.data,
                actionUrl: getActionUrl(payload.type, payload.parcelId),
            }

            const job = await this.emailQueue.add(
                'send-email',
                emailJob,
                {
                    attempts: 3, backoff: 5000, priority: payload.priority === NotificationPriority.HIGH ? 1 : 3,
                    removeOnComplete: { count: 1000, age: 24 * 3600 }, // Keep last 1000 or 24h
                    removeOnFail: { count: 500, age: 7 * 24 * 3600 },  // Keep last 500 or 7 days
                })

            console.log(`✅ Email job ${job.id} added to queue`);
        }

        if (payload.channels.includes(NotificationChannel.WEB)) {
            const createWebNotiDto: CreateWebNotificationDto = {
                userId: payload.userId,
                type: payload.type,
                title: getTitle(payload.type),
                message: getMessage(payload),
                actionUrl: getActionUrl(payload.type, payload.parcelId),
            }

            if (useQueue) {
                const webJob: WebJob = createWebNotiDto;
                await this.webQueue.add(
                    'send-web',
                    webJob, {
                    attempts: 3, backoff: 5000, priority: payload.priority === NotificationPriority.HIGH ? 1 : 3,
                    removeOnComplete: false,
                    removeOnFail: false,
                });
            } else {
                await this.webNotificationService.create(createWebNotiDto);
            }
        }
    }
}