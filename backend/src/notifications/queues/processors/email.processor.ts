import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { NotificationType, ParcelStatus } from "@prisma/client";
import { EmailJob } from "src/notifications/interfaces/notification-payload.interface";
import { Injectable, Logger } from "@nestjs/common";
import { getParcelReadyTemplate } from "src/notifications/templates/parcel-ready.template";
import { getParcelPickedUpTemplate } from "src/notifications/templates/parcel-pickedup.template";
import { getPickupReminderTemplate } from "src/notifications/templates/parcel-reminder.template";
import { Template, TemplateData } from "src/notifications/interfaces/template.interface";
import { InjectResend } from "nest-resend";
import { Resend } from "resend";
import { getAccountApprovedTemplate } from "src/notifications/templates/resident-approved.template";
import { getAccountRejectedTemplate } from "src/notifications/templates/resident-rejected.template";
import { ParcelsService } from "src/parcels/parcels.service";
import { getParcelReturnedTemplate } from "src/notifications/templates/parcel-returned.template";

@Processor('email-notifications', { concurrency: 5 })
@Injectable()
export class EmailNotificationsProcessor extends WorkerHost {
    private readonly logger = new Logger(EmailNotificationsProcessor.name);

    constructor(
        @InjectResend() private readonly resendClient: Resend,
        private parcelsService: ParcelsService
    ) {
        super();
        this.logger.log("🏃‍➡️ EmailNotificationsProcessor initialized");

        // Check if processor is properly initialized
        setTimeout(() => {
            this.logger.debug('Processor is alive and listening');
        }, 1000);
    }


    async process(job: Job<EmailJob, any, string>) {
        console.log("-----------------------------------------");
        console.log("🔥 WORKER FOUND JOB:", job.id, "NAME:", job.name);
        console.log("-----------------------------------------");
        if (job.name !== 'send-email') {
            console.log("❌ Job name mismatch, returning");
            return; // skip other jobs
        }

        this.logger.log(`🏃‍➡️ Starting email job ${job.id} - ${job.name}`);

        const { type, userId, residentEmail, parcelId, actionUrl, data } = job.data;
        try {
            console.log(`Processing email notification for user ${userId}, type: ${type} `);

            const template = this.getTemplate(type, { ...data, actionUrl });

            const { data: EmailSentData, error } = await this.resendClient.emails.send({
                from: process.env.RESEND_EMAIL,
                // TODO:
                // to: email,
                to: "minhtettharutycc@gmail.com",
                subject: template.subject,
                html: template.html,
            })

            if (error) throw error;

            this.logger.log(`Email ${EmailSentData.id} sent successfully to ${residentEmail} for ${type}`);
            const t2 = new Date().getMilliseconds()

            if (type === "PARCEL_READY" && parcelId) {
                await this.parcelsService.updateParcelStatus(parcelId, ParcelStatus.READY_FOR_PICKUP).catch(error => {
                    this.logger.error(`Failed to update stats after sending ${type} email: `, error)
                })
            }

            // await this.logNotification(userId, type, 'EMAIL', 'SENT');
        } catch (error) {
            this.logger.error(`Failed to send email to ${residentEmail}: ${error.message} `, error.stack);
            // await this.logNotification(userId, type, 'EMAIL', 'FAILED', error.message);
            throw error; // BULL WILL RETRY
        }
    }



    private getTemplate(type: NotificationType, data: TemplateData): Template {
        switch (type) {
            case NotificationType.PARCEL_READY:
                return getParcelReadyTemplate(data);
            case NotificationType.PARCEL_PICKED_UP:
                return getParcelPickedUpTemplate(data);
            case NotificationType.PARCEL_RETURNED:
                return getParcelReturnedTemplate(data);
            case NotificationType.PICKUP_REMINDER:
                return getPickupReminderTemplate(data);
            case NotificationType.ACCOUNT_APPROVED:
                return getAccountApprovedTemplate(data);
            case NotificationType.ACCOUNT_REJECTED:
                return getAccountRejectedTemplate(data);
            default:
                throw new Error(`Unsupported notification type: ${type} `);
        }
    }

}