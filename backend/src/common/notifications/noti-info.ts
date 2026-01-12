import { NotificationType } from "@prisma/client";
import { NotificationPayload } from "src/notifications/interfaces/notification-payload.interface";

export function getTile(type: NotificationType) {
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
            return "New Update";
    }
}

export function getMessage(payload: NotificationPayload) {
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
            return "updated information";
    }
}

export function getActionUrl(type: NotificationType, parcelId?: string): string | undefined {
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