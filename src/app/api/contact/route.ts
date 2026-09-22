import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Field Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full Name is required.' },
        { status: 400 }
      );
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid Email Address is required.' },
        { status: 400 }
      );
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone Number is required.' },
        { status: 400 }
      );
    }
    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message content is required.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL_TO || 'shahid.iqbal@emswitchgear.com';

    // HTML Email Template
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #d3e4ee; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 77, 109, 0.08);">
        <div style="background-color: #004d6d; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Electrical Masters Switchgear</h2>
          <p style="margin: 4px 0 0 0; color: #c3e8ff; font-size: 13px;">New Contact Form Inquiry</p>
        </div>
        <div style="padding: 24px; color: #00283d;">
          <h3 style="margin-top: 0; color: #0098da; border-bottom: 2px solid #e1f0f8; padding-bottom: 8px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #3e5261; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; color: #00283d; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #3e5261;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0098da; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #3e5261;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #00283d; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #3e5261;">Company Name:</td>
              <td style="padding: 8px 0; color: #00283d;">${company && company.trim() ? company : 'N/A'}</td>
            </tr>
          </table>

          <h3 style="color: #0098da; border-bottom: 2px solid #e1f0f8; padding-bottom: 8px; margin-top: 24px;">Project / Message Details</h3>
          <div style="background-color: #f4f8fb; border-left: 4px solid #0098da; padding: 14px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #00283d; whitespace: pre-wrap;">
${message}
          </div>
        </div>
        <div style="background-color: #003850; color: #98cded; padding: 16px; text-align: center; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.1);">
          Received from Electrical Masters Switchgear Website • Sent to: <strong>${recipientEmail}</strong>
        </div>
      </div>
    `;

    // Configure Nodemailer Transporter
    let transporter;
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      // Use configured custom SMTP
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Create Ethereal / JSON test transporter for zero-config fallback
      transporter = nodemailer.createTransport({
        jsonTransport: true,
      });
    }

    // Send Mail
    const mailOptions = {
      from: `"EM Switchgear Website" <noreply@emswitchgear.com>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Website Inquiry] ${name} - Electrical Masters Switchgear`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Contact API] Email queued/sent successfully to ${recipientEmail}:`, info.messageId || info);

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting Electrical Masters Switchgear. Our engineering team will get back to you shortly.',
      recipient: recipientEmail,
    });
  } catch (error: any) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again or contact us directly via phone or email.',
      },
      { status: 500 }
    );
  }
}
