"use client";

import { authorize } from "@/lib/authorize";
import { useRouter } from "next/navigation";

export default function BuyButton() {
  const { push } = useRouter();

  async function buyThisItem() {
    const auth = await authorize();

    if (!auth) {
      push("/login");
    } else {
      alert("به سبد خرید اضافه شد");
    }
  }

  return (
    <button
      onClick={() => buyThisItem()}
      className="opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 delay-200 px-3 py-1 bg-[#eacc90] text-[#736341] active:bg-[#c4aa72] absolute bottom-5 right-5"
    >
      خرید کنید
    </button>
  );
}
