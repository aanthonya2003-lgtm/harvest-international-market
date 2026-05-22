import { NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // In production, integrate with email service (Resend, SendGrid, or webhook).
    // Logging here for the deployment provider (Vercel) to capture.
    console.log("[contact:new]", {
      ts: new Date().toISOString(),
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      message: body.message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact:error]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
