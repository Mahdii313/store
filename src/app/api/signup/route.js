import connectToDB from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { emailPhone, password } = await request.json();

  try {
    connectToDB();
    const user = await User.create({
      emailPhone,
      password,
      permission: "user",
    });
    if (user) {
      return NextResponse.json({ message: "ثبت شد", success: true });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "ثبت نشد", success: false });
  }
}
