import User from "@/models/user";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { COOKIE_NAME, COOKIE_SECRET, MAX_AGE } from "@/constants";
import connectToDB from "@/database";
import { cookies } from "next/headers";

export async function POST(request) {
  const { emailPhone, password } = await request.json();

  try {
    connectToDB();
    const user = await User.findOne({ emailPhone });
    const cookieStore = await cookies();

    if (user) {
      const auth = password == user.password;
      if (auth) {
        const token = createJWT(user._id);
        cookieStore.set(COOKIE_NAME, token, {
          httpOnly: true,
          maxAge: MAX_AGE,
        });
        return NextResponse.json({
          message: "وارد شدید",
          success: true,
        });
      } else {
        return NextResponse.json({
          message: "رمز عبور اشتباه است",
          success: false,
        });
      }
    } else {
      return NextResponse.json({
        message: "این ایمیل یا شماره تلفن ثبت نشده است",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "خطایی رخ داد", success: false });
  }
}

function createJWT(id) {
  return sign({ [COOKIE_NAME]: id }, COOKIE_SECRET, { expiresIn: MAX_AGE });
}
