'use server';

import { Resend } from 'resend';

export interface SendEmailInput {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

export async function sendEmail(
  input: SendEmailInput | FormData
): Promise<SendEmailResponse> {
  try {
    let name = '';
    let email = '';
    let phone = '';
    let company = '';
    let message = '';

    if (input instanceof FormData) {
      name = (input.get('name') as string) || '';
      email = (input.get('email') as string) || '';
      phone = (input.get('phone') as string) || '';
      company = (input.get('company') as string) || '';
      message = (input.get('message') as string) || '';
    } else {
      name = input.name || '';
      email = input.email || '';
      phone = input.phone || '';
      company = input.company || '';
      message = input.message || '';
    }

    // Clean strings
    name = name.trim();
    email = email.trim();
    phone = phone.trim();
    company = company.trim();
    message = message.trim();

    // Debug Log
    console.log('[SendEmail Action] Processing contact form submission:', {
      name,
      email,
      phone,
      company: company || 'N/A',
      messageLength: message.length,
    });

    // 1. Validation
    if (!name) {
      console.warn('[SendEmail Action Validation Error]: Full Name is missing.');
      return { success: false, error: 'Full Name is required.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      console.warn('[SendEmail Action Validation Error]: Invalid email format:', email);
      return { success: false, error: 'Please enter a valid email address.' };
    }

    if (!phone) {
      console.warn('[SendEmail Action Validation Error]: Phone Number is missing.');
      return { success: false, error: 'Phone Number is required.' };
    }

    if (!message) {
      console.warn('[SendEmail Action Validation Error]: Message is missing.');
      return { success: false, error: 'Message content is required.' };
    }

    // 2. Check Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[SendEmail Action Error]: RESEND_API_KEY is not defined in environment variables.');
      return {
        success: false,
        error: 'Email service configuration error. RESEND_API_KEY is missing.',
      };
    }

    const resend = new Resend(apiKey);
    const recipientEmail =
      process.env.RECIPIENT_EMAIL ||
      process.env.CONTACT_EMAIL_TO ||
      'shahid.iqbal@emswitchgear.com';

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // 3. Construct HTML Body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f8fb; margin: 0; padding: 20px; color: #00283d; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #d3e4ee; box-shadow: 0 4px 16px rgba(0,77,109,0.08); }
            .header { background: #004d6d; padding: 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
            .header p { margin: 6px 0 0 0; color: #c3e8ff; font-size: 13px; }
            .content { padding: 28px; }
            .section-title { font-size: 14px; font-weight: 700; color: #0098da; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; border-bottom: 2px solid #e1f0f8; padding-bottom: 6px; }
            .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .data-table td { padding: 10px 0; border-bottom: 1px solid #edf4f8; font-size: 14px; }
            .data-table .label { font-weight: 600; color: #3e5261; width: 140px; }
            .data-table .value { color: #00283d; font-weight: 500; }
            .message-box { background: #f4f8fb; border-left: 4px solid #0098da; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #00283d; white-space: pre-wrap; word-wrap: break-word; }
            .footer { background: #003850; padding: 16px; text-align: center; font-size: 12px; color: #98cded; border-top: 1px solid rgba(255,255,255,0.1); }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Electrical Masters Switchgear</h1>
              <p>New Website Inquiry</p>
            </div>
            <div class="content">
              <div class="section-title">Customer Information</div>
              <table class="data-table">
                <tr>
                  <td class="label">Customer Name:</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Customer Email:</td>
                  <td class="value"><a href="mailto:${email}" style="color: #0098da; text-decoration: none; font-weight: 600;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Customer Phone:</td>
                  <td class="value"><a href="tel:${phone}" style="color: #00283d; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td class="label">Company Name:</td>
                  <td class="value">${company || 'N/A'}</td>
                </tr>
              </table>

              <div class="section-title">Customer Message</div>
              <div class="message-box">${message}</div>
            </div>
            <div class="footer">
              Received on: <strong>${timestamp}</strong><br/>
              Target Recipient: <strong>${recipientEmail}</strong>
            </div>
          </div>
        </body>
      </html>
    `;

    const textBody = `New Inquiry from Electrical Masters Website\n\nCustomer Name: ${name}\nCustomer Email: ${email}\nCustomer Phone: ${phone}\nCompany: ${company || 'N/A'}\nTimestamp: ${timestamp}\n\nCustomer Message:\n${message}`;

    // 4. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Electrical Masters Switchgear <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: 'New Inquiry from Electrical Masters Website',
      html: htmlBody,
      text: textBody,
    });

    if (error) {
      console.error('[SendEmail Action Resend API Error]:', error);
      return {
        success: false,
        error: error.message || 'Failed to deliver email through Resend.',
      };
    }

    console.log('[SendEmail Action Success] Email dispatched successfully:', data);

    return {
      success: true,
      message: "Thank you! We'll contact you soon.",
      data,
    };
  } catch (err: any) {
    console.error('[SendEmail Action Exception]:', err);
    return {
      success: false,
      error: err?.message || 'An unexpected error occurred while sending email.',
    };
  }
}
