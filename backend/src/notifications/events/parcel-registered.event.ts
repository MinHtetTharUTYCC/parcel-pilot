export class ParcelRegisteredEvent {
    recipientId: string;
    parcelId: string;
    recipientName: string;
    unitNumber: string;
    pickupCode: string;
    courier: string | null;
    registeredAt: Date;
}