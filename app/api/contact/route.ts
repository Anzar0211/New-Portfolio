import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }


    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASSWORD, 
      },
    });


    const mailOptions = {
      from: `"${name}" <${email}>`, 
      to: process.env.CONTACT_EMAIL, 
      subject: `New Contact Form Submission from ${name}`, 
      text: `You have received a new message from your website contact form.
      
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };


    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}