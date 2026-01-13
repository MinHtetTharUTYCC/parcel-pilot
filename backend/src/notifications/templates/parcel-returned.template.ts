import { Template, TemplateData } from "../interfaces/template.interface";

export function getParcelReturnedTemplate(data: TemplateData): Template {
    const { recipientName, unitNumber, returnedAt, courier, actionUrl } = data;

    const formattedDate = returnedAt
        ? new Date(returnedAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : '';

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #EF4444; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { padding: 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; }
          .info-box { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .button { display: inline-block; padding: 12px 24px; background-color: #3B82F6; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
          .reason-box { background-color: #FEF2F2; border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0; }
          .status-returned { color: #EF4444; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Parcel Returned to Sender</h1>
          </div>
          <div class="content">
            <p>Hello ${recipientName || 'Valued Resident'},</p>
            
            <p>We wanted to inform you that your parcel has been returned to the sender.</p>
            
            <div class="info-box">
              <h3>Return Details:</h3>
              <p><strong>Unit Number:</strong> ${unitNumber || 'N/A'}</p>
              <p><strong>Courier:</strong> ${courier || 'N/A'}</p>
              <p><strong>Returned:</strong> ${formattedDate}</p>
              <p><strong>Status:</strong> <span class="status-returned">RETURNED TO SENDER</span></p>
            </div>
            
            <p>Common reasons for parcel returns include:</p>
            <ul>
              <li>Parcel was not picked up within the holding period</li>
              <li>Recipient information was incorrect or incomplete</li>
              <li>Recipient refused the delivery</li>
              <li>Parcel was damaged or opened</li>
            </ul>
            
            ${actionUrl ? `
            <div style="text-align: center; margin-top: 30px;">
              <a href="${actionUrl}" class="button">View Parcel Details</a>
            </div>
            ` : ''}
            
            <div class="footer">
              <p><strong>What to do next:</strong></p>
              <p>1. Contact the sender/seller to arrange for a new delivery or refund</p>
              <p>2. Ensure your delivery information is correct for future deliveries</p>
              <p>3. If you believe this is an error, please contact the Front Desk immediately</p>
              <br>
              <p>For any questions about this return, please contact the Front Desk.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    return {
        subject: `Parcel Returned - ${unitNumber || ''}`,
        html
    };
}