import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      industry,
      phone,
      email,
      numberOfStaff,
      packageOfInterest,
      preferredContactMethod,
      additionalInformation,
      type,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const enquiry = await db.enquiry.create({
      data: {
        name,
        company: company || null,
        industry: industry || null,
        phone: phone || null,
        email,
        numberOfStaff: numberOfStaff || null,
        packageOfInterest: packageOfInterest || null,
        preferredContactMethod: preferredContactMethod || null,
        additionalInformation: additionalInformation || null,
        type: type || "general",
      },
    });

    return NextResponse.json(
      { success: true, id: enquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
