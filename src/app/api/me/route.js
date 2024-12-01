import { COOKIE_NAME, COOKIE_SECRET } from "@/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return NextResponse.json({
      message: "احراز هویت نشد",
      success: false,
    });
  }

  try {
    const { value } = token;
    verify(value, COOKIE_SECRET);

    return NextResponse.json({
      authorized: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      authorized: false,
    });
  }
}
