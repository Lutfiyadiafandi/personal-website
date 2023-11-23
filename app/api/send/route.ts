import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lutfiyadiafandi@gmail.com",
      subject: "Form Contact",
      reply_to: email,
      html: `<p>Name: <strong>${name}</strong></p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>`,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
