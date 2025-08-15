import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = bookingSchema.parse(body);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("New booking request received:", {
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      carModel: validatedData.carModel,
      service: validatedData.service,
      preferredDate: validatedData.preferredDate,
      address: validatedData.address,
      comments: validatedData.comments,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Booking request received successfully",
      bookingId: `BK${Date.now()}`,
    });
    
  } catch (error) {
    console.error("Booking API error:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid form data", details: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}