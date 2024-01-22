import { Navbar } from "@/types";
import Image from "next/image";

interface NavbarProps {
  data: Navbar[];
}

export default function Navbar({ data }: NavbarProps) {
  return (
    <>
      <p className="text-[8px] sm:text-[13px] tracking-[4px] font-medium text-[#BFBFBF] w-full py-[15px] text-center">
        {data[0].text}
      </p>
      <div className="bg-[#212529] w-full lg:h-[135px] p-[20px] lg:p-[40px] flex flex-col items-center justify-between gap-[50px] sm:flex-row">
        <Image
          src={data[0].logo}
          className="w-[226px] h-[45px]"
          alt={""}
          width={226}
          height={45}
        />

        <div className="flex items-center justify-center sm:justify-end gap-[25px] w-full">
          {data[0].partners.map((src, index) => (
            <div className="relative" key={index}>
              <p className="hidden md:flex text-[6px] font-medium text-[#939393] absolute top-[1px] left-[60px] tracking-[1.888px]">
                {src.label}
              </p>
              <Image src={src} alt={""} width={src.width} height={src.height} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
