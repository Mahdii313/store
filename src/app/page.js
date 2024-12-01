import Menu from "@/components/menu";
import Products from "@/components/products";
import { SOCIALS } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="relative h-[100%] md:h-[90%] w-full xl:w-[95%] 2xl:w-5/6 bg-white pt-20 shadow-none sm:shadow-[11px_11px_0_0_rgba(196,170,114,1)] overflow-hidden">
        <h1 className="font-IranNastaliq text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#a38d5d] text-center font-bold select-none">
          فروشگاه محصولات دستیِ سنتی و محلی
        </h1>
        <Menu />
        <p className="text-[#a38d5d] text-sm text-center mt-7">
          ساخته&nbsp; &nbsp; &nbsp; &nbsp;شده&nbsp; &nbsp; &nbsp;
          &nbsp;توسط&nbsp; &nbsp; &nbsp; &nbsp;مهدی رستمی
        </p>
        <ul className="absolute flex flex-col top-1/2 left-2 sm:left-5 text-2xl gap-3 -translate-y-1/2 text-[#a38d5d]">
          {SOCIALS.map((item, index) => (
            <Link key={index} href={item.link}>
              <li>{item.icon}</li>
            </Link>
          ))}
        </ul>
        <ul className="absolute flex gap-6 justify-center items-center rotate-90 -right-16 sm:-right-10 top-1/2 -translate-y-1/2 text-[#eacc90]">
          <Link href={"/about"}>
            <li>درباره ما</li>
          </Link>
          <div className="size-[6px] rounded-full bg-[#736341]"></div>
          <Link href={"/contact"}>
            <li>ارتباط با ما</li>
          </Link>
        </ul>
        <div className="mt-10 flex justify-center items-center">
          <Products />
        </div>
      </div>
    </main>
  );
}
