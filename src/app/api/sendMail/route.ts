import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { user_email, user_message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: user_email,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Message",
      text: `Message: ${user_message}\nFrom: ${user_email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
