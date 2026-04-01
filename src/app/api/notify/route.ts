import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface NotifyPayload {
  name: string;
  email: string;
  provider: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as NotifyPayload;
    const { name, email, provider } = body;

    if (!name || !email || !provider) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Lumens <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${name} has registered interest in Lumens`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;
          margin: 0 auto; background: #0d0d0d; color: #f5f0e8;
          padding: 40px; border-radius: 8px;">
          <h1 style="color: #c9a84c; font-size: 24px; margin-bottom: 8px;">
            LUMENS
          </h1>
          <p style="color: #a09a8e; margin-bottom: 32px;">
            Luxury Residences &middot; Ruaka, Nairobi
          </p>
          <h2 style="color: #f5f0e8; margin-bottom: 24px;">
            New Lead Registered
          </h2>
          <div style="background: #1a1a1a; border-left: 4px solid #c9a84c;
            padding: 24px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #c9a84c;">Name:</strong> ${name}
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #c9a84c;">Email:</strong> ${email}
            </p>
            <p style="margin: 0;">
              <strong style="color: #c9a84c;">Signed in via:</strong>
              ${provider.charAt(0).toUpperCase() + provider.slice(1)}
            </p>
          </div>
          <p style="color: #a09a8e; font-size: 14px;">
            Log in to your admin dashboard to view all leads.
          </p>
          <hr style="border-color: #2d5a3d; margin: 32px 0;" />
          <p style="color: #a09a8e; font-size: 12px; text-align: center;">
            &copy; 2025 Lumens &middot; Ovation Residences Limited
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notify error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
