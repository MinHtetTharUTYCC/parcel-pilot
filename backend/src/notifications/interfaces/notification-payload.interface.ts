import { NotificationType } from "@prisma/client";
import { NotificationChannel, NotificationPriority } from "../enums/nofiication-type.enum";
import { CreateWebNotificationDto } from "../services/dto/create-web-notification.dto";

export interface NotificationData {
    recipientName: string;
    unitNumber: string;
    pickupCode: string;
    courier?: string;
    registeredAt: Date;
}

export interface NotificationPayload {
    type: NotificationType;
    userId: string;
    email?: string;
    parcelId?: string;
    data: NotificationData;
    channels: NotificationChannel[];
    priority?: NotificationPriority;
}

export type EmailJob = Omit<NotificationPayload, "channels" | "priority"> & { email: string, actionUrl?: string }
export type WebJob = CreateWebNotificationDto