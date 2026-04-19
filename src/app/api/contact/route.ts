import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Mocking email submission logic
    console.log("Contact form submission received:", body);
    
    // In a real production app, you would use a service like Resend, Nodemailer, or SendGrid here
    
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
