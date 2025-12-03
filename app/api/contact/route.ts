import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipients = [
      process.env.CONTACT_TO_1,
      process.env.CONTACT_TO_2,
      process.env.CONTACT_TO_3,
    ].filter(Boolean);

    await transporter.sendMail({
      from: `"Formularz Kontaktowy" <${process.env.SMTP_USER}>`,
      to: recipients.join(", "),
      subject: "📬 Nowa wiadomość z formularza kontaktowego",
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Mail error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
