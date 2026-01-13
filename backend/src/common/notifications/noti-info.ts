import { NotificationType } from "@prisma/client";
import { NotificationPayload } from "src/notifications/interfaces/notification-payload.interface";

export function getTile(type: NotificationType) {
    switch (type) {
        case NotificationType.PARCEL_READY:
            return "Your parcel is ready to pickup";
        case NotificationType.PARCEL_PICKED_UP:
            return "Your parcel is picked up successfully";
        case NotificationType.PARCEL_RETURNED:
            return "Your parcel has been returned to Courier!";
        case NotificationType.PICKUP_REMINDER:
            return "Your need to pick up your parcel!";
        case NotificationType.ACCOUNT_APPROVED:
            return "Your resident account is approved";
        case NotificationType.ACCOUNT_REJECTED:
            return "Your resident account is rejected!";
        default:
            return "System Notification";
    }
}

export function getMessage(payload: NotificationPayload) {
    switch (payload.type) {
        case NotificationType.PARCEL_READY:
            return `Pickup code: ${payload.data.pickupCode}`;
        case NotificationType.PARCEL_PICKED_UP:
            return `Pickup code: ${payload.data.pickupCode}`;
        case NotificationType.PARCEL_RETURNED:
            return "Please contact to Front Desk";
        case NotificationType.PICKUP_REMINDER:
            return `Pickup code: ${payload.data.pickupCode}`;
        case NotificationType.ACCOUNT_APPROVED:
            return "You can now login your resident account";
        case NotificationType.ACCOUNT_REJECTED:
            return "Contact frontdesk for further assistant";
        default:
            return "information update";
    }
}

export function getActionUrl(type: NotificationType, parcelId?: string): string | undefined {
    switch (type) {
        case NotificationType.PARCEL_READY:
        case NotificationType.PARCEL_PICKED_UP:
        case NotificationType.PICKUP_REMINDER:
        case NotificationType.PICKUP_REMINDER:
            if (parcelId) {
                return `/parcels/${parcelId}`
            }
    }

    return undefined;
}