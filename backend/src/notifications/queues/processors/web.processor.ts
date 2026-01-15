import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { Injectable, Logger } from "@nestjs/common";
import { WebJob } from "src/notifications/interfaces/notification-payload.interface";
import { WebNotificationsService } from "src/notifications/services/web-notifications.service";

@Processor('web-notifications', { concurrency: 5 })
@Injectable()
export class WebNotificationsProcessor extends WorkerHost {
    private readonly logger = new Logger(WebNotificationsProcessor.name);

    constructor(private webNotificationsService: WebNotificationsService) {
        super();
        this.logger.log("🏃‍➡️ WebNotificationsProcessor initialized");
    }

    async process(job: Job<WebJob>) {

        if (job.name !== 'send-web') {
            return; //skip other jobs
        }

        this.logger.log(`🏃‍➡️ Starting web job ${job.id} - ${job.name}`);

        // destructure is only for log use, dto is already same as job in this case
        const { userId, type } = job.data;

        try {
            console.log(`Processing web notification for user ${userId}, type: ${type}`);

            const newNotification = await this.webNotificationsService.create(job.data)

            this.logger.log(`Web nofication ${newNotification.id} sent successfully to ${newNotification.userId} for ${type}`);

            // await this.logNotification(userId, type, 'WEB', 'SENT');
        } catch (error) {
            this.logger.error(`Failed to send email to ${userId}: ${error.message}`, error.stack);
            // await this.logNotification(userId, type, 'WEB', 'FAILED', error.message);
            throw error; // BULL WILL RETRY
        }
    }
}