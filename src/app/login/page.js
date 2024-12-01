"use client";

import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { push } = useRouter();
  const [error, setError] = useState(false);
  async function submitForm(e) {
    e.preventDefault();
    if (e.target.emailPhone.value && e.target.password.value) {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          emailPhone: e.target.emailPhone.value,
          password: e.target.password.value,
        }),
      });

      const status = await response.json();

      if (status.success) {
        push("/dashboard");
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={submitForm}
        onChange={() => setError(false)}
        className="bg-white px-4 sm:px-6 py-7 sm:py-10 w-full sm:w-fit shadow-none sm:shadow-[11px_11px_0_0_rgba(196,170,114,1)]"
      >
        <div>
          <div
            onClick={() => push("/")}
            className="mb-2 text-slate-800 cursor-pointer w-fit"
          >
            <FaArrowRight />
          </div>
          <h2 className="text-2xl sm:text-3xl">ورود</h2>
          <p className="text-slate-400 mt-2 text-xs">خوش آمدید</p>
        </div>
        <div className="mt-14">
          <div className="w-full sm:w-72">
            <h3 className="text-xs mb-2">ایمیل/ شماره تلفن</h3>
            <div className="flex items-center">
              <label htmlFor="emailPhone" className="p-2 bg-[#eacc90]">
                <MdOutlineMail className="text-slate-800" />
              </label>
              <input
                id="emailPhone"
                name="emailPhone"
                type="text"
                className={`bg-slate-200 px-2 py-1 outline-none w-full text-slate-900 ${
                  error && "outline outline-offset-0 outline-red-500"
                }`}
                spellCheck="false"
              />
            </div>
          </div>
          <div className="mt-6 w-full sm:w-72">
            <h3 className="text-xs mb-2">رمز عبور</h3>
            <div className="flex items-center">
              <label htmlFor="password" className="p-2 bg-[#eacc90]">
                <RiLockPasswordLine className="text-slate-800" />
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className={`bg-slate-200 px-2 py-1 outline-none w-full text-slate-900 ${
                  error && "outline outline-offset-0 outline-red-500"
                }`}
                spellCheck="false"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#eacc90] w-full mt-7 py-2 text-slate-800 text-sm mb-1 active:bg-[#c4aa72]"
          >
            وارد شوید
          </button>
          <div className="flex justify-between">
            <Link href={"/forgotPassword"} className="text-red-500 text-xs">
              فراموشی رمز عبور
            </Link>
            <Link href={"/signup"} className="text-[#938a33] text-xs">
              ثبت نام کنید
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
