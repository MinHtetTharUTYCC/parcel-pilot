import { TemplateData, Template } from "../interfaces/template.interface";

export function getPickupReminderTemplate(data: TemplateData): Template {
    const { recipientName, unitNumber, pickupCode, registeredAt, reminderDate, actionUrl } = data;

    const registeredFormatted = registeredAt
        ? new Date(registeredAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })
        : '';

    const reminderFormatted = reminderDate
        ? new Date(reminderDate).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        })
        : '';

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #F59E0B; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; }
          .reminder-box { background-color: #FFF7ED; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; }
          .code { font-size: 28px; font-weight: bold; color: #D97706; text-align: center; margin: 15px 0; }
          .button { display: inline-block; padding: 12px 24px; background-color: #F59E0B; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⏰ Reminder: Parcel Awaiting Pickup</h1>
          </div>
          <div class="content">
            <p>Hello ${recipientName || 'Valued Resident'},</p>
            
            <p>This is a friendly reminder that you have a parcel waiting for pickup.</p>
            
            <div class="reminder-box">
              <p><strong>Reminder:</strong> Your parcel has been waiting since ${registeredFormatted}.</p>
              <p>Please pick it up soon to avoid storage fees or return to sender.</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Quick Details:</h3>
              <p><strong>Unit Number:</strong> ${unitNumber || 'N/A'}</p>
              <p><strong>Pickup Code:</strong></p>
              <div class="code">${pickupCode || 'N/A'}</div>
              <p><strong>Best picked up by:</strong> ${reminderFormatted}</p>
            </div>
            
            ${actionUrl ? `
            <div style="text-align: center; margin-top: 30px;">
              <a href="${actionUrl}" class="button">Pick Up Now</a>
            </div>
            ` : ''}
            
            <div class="footer">
              <p><strong>Pickup Location:</strong> Building Lobby / Concierge Desk</p>
              <p><strong>Hours:</strong> 24/7</p>
              <p>After 7 days, unclaimed parcels may incur storage fees or be returned to sender.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    return {
        subject: `Reminder: Parcel Awaiting Pickup - ${unitNumber || ''}`,
        html
    };
}