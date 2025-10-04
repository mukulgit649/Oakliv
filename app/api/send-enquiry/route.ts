import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, phone, message } = body

    // Validate required fields
    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // teamoakliv@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD // App password for Gmail
      }
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'teamoakliv@gmail.com',
      subject: `New Project Enquiry from ${name} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4E342E, #8D6E63); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Project Enquiry</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Oakliv Eco India</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #4E342E; margin-bottom: 20px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #4E342E;">Name:</td>
                <td style="padding: 10px;">${name}</td>
              </tr>
              <tr style="background: #f0f0f0;">
                <td style="padding: 10px; font-weight: bold; color: #4E342E;">Company:</td>
                <td style="padding: 10px;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #4E342E;">Email:</td>
                <td style="padding: 10px;"><a href="mailto:${email}" style="color: #8D6E63;">${email}</a></td>
              </tr>
              <tr style="background: #f0f0f0;">
                <td style="padding: 10px; font-weight: bold; color: #4E342E;">Phone:</td>
                <td style="padding: 10px;"><a href="tel:${phone}" style="color: #8D6E63;">${phone}</a></td>
              </tr>
            </table>
            
            ${message ? `
              <h2 style="color: #4E342E; margin: 30px 0 20px 0;">Project Details</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #8D6E63;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This enquiry was submitted from the Oakliv website.<br>
                Please respond to the client within 24 hours.
              </p>
            </div>
          </div>
          
          <div style="background: #4E342E; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">
              © ${new Date().getFullYear()} Oakliv Eco India - Premium Sustainable Design
            </p>
          </div>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Enquiry sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to send enquiry' },
      { status: 500 }
    )
  }
}
