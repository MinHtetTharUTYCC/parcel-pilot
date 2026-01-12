export interface TemplateData {
    recipientName?: string;
    unitNumber?: string;
    pickupCode?: string;
    courier?: string;
    registeredAt?: Date;
    pickedUpAt?: Date;
    reminderDate?: Date;
    actionUrl?: string;
    [key: string]: any;
};

export interface Template {
    subject: string;
    html: string;
};