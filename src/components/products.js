import { PICTURES } from "@/constants";
import BuyButton from "./buyButton";

export default function Products() {
  return (
    <div className="overflow-hidden w-3/4">
      <div className="flex flex-wrap gap-2 justify-center md:justify-between w-full h-[400px] md:h-[410px] lg:h-[430px] xl:h-[450px] 2xl:h-[500px] overflow-y-scroll pl-[17px] box-content">
        {PICTURES.map((filename, index) => (
          <div
            key={index}
            className="group relative flex justify-center items-center size-64 bg-cover"
            style={{ backgroundImage: `url(./${filename})` }}
          >
            {/* <div className="w-[90%] h-[90%] border-2 border-[#eacc90] bg-transparent"></div> */}
            <BuyButton />
          </div>
        ))}
      </div>
    </div>
  );
}
