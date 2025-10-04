import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
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

    // Email content for newsletter subscription
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'teamoakliv@gmail.com',
      subject: `New Newsletter Subscription - ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4E342E, #8D6E63); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Newsletter Subscription</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Oakliv Eco India</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #4E342E; margin-bottom: 20px;">New Subscriber</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 18px; color: #333;">
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #8D6E63; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #8D6E63;">
              <h3 style="color: #4E342E; margin-top: 0;">Next Steps:</h3>
              <ul style="color: #333; line-height: 1.6;">
                <li>Add this email to your newsletter mailing list</li>
                <li>Send welcome email with product updates and design inspiration</li>
                <li>Include unsubscribe option in all newsletters</li>
              </ul>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>Note:</strong> This subscriber signed up from the Oakliv website newsletter form.
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
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}
