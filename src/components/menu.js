"use client";

import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authorize } from "@/lib/authorize";
import { PiBasketLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { TiThMenu } from "react-icons/ti";

export default function Menu() {
  const [auth, setAuth] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    async function authUser() {
      setAuth(await authorize());
    }

    authUser();
  }, []);
  return (
    <div className="relative flex justify-center items-center mt-8">
      <ul className="hidden lg:flex text-[#eacc90]">
        {MENU_ITEMS.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="hover:text-white hover:bg-[#eacc90] p-2 duration-300 2xl:w-24 text-center delay-200 text-sm"
          >
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
      <div className="absolute right-10 sm:right-24 -top-4 flex justify-center items-center lg:hidden">
        <div onClick={() => setOpenMenu(!openMenu)} className="z-10">
          <TiThMenu className="rounded-full p-1 text-3xl text-white bg-[#eacc90]" />
        </div>
      </div>
      {openMenu && (
        <>
          <div
            className="h-screen w-screen z-20 absolute bg-black bg-opacity-55"
            onClick={() => setOpenMenu(false)}
          ></div>
          <ul className="absolute right-10 top-10 flex flex-col items-start z-30 text-[#eacc90]">
            {MENU_ITEMS.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="hover:text-white hover:bg-[#eacc90] p-2 duration-300 2xl:w-24 text-center delay-200 text-sm"
              >
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </>
      )}
      {auth ? (
        <PiBasketLight
          onClick={() => push("/dashboard")}
          className="cursor-pointer absolute text-[#eacc90] font-bold text-4xl left-72 top-1/2 -translate-y-1/2"
        />
      ) : (
        <div className="w-full lg:w-auto justify-center lg:absolute left-36 xl:left-48 top-1/2 -translate-y-1/2 flex items-center text-sm">
          <button
            onClick={() => push("/login")}
            className="text-[#eacc90] hover:text-white hover:bg-[#eacc90] duration-200 px-6 py-1"
          >
            ورود
          </button>
          <div className="mx-1 xl:mx-3 text-red-500 font-semibold text-xs">
            /
          </div>
          <button
            onClick={() => push("/signup")}
            className="text-[#eacc90] hover:text-white hover:bg-[#eacc90] duration-200 px-6 py-1"
          >
            ثبت نام
          </button>
        </div>
      )}
    </div>
  );
}
