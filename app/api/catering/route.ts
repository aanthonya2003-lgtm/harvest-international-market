import { NextResponse } from "next/server";

export const runtime = "edge";

interface CateringPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  event_date?: string;
  guests?: string;
  event_type?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CateringPayload;

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    console.log("[catering:new]", {
      ts: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[catering:error]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
