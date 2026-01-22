import { ContactLead } from "@/app/lib/db/models/ContactLead";
import { connectDB } from "@/app/lib/db/mongoose";
import { contactSchema } from "@/app/lib/validation/contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // honeypot: bots will fill this, humans won't
    if (data.companyHidden && data.companyHidden.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    await connectDB();

    await ContactLead.create({
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      phone: data.phone,
      email: data.email,
      fleetType: data.fleetType,
      fleetSize: data.fleetSize,
      message: data.message
    });

    // TODO: trigger email/Slack notification here if you want.

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
