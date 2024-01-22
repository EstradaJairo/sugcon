import Image from "next/image";
import { Poppins } from "next/font/google";
import { Banner } from "@/types";

interface BannerProps {
  data: Banner[];
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Banner({ data }: BannerProps) {
  return (
    <>
      <div className={`w-full backgroundImage`}>
        <div className="background z-[3] pt-[70px] flex flex-col justify-between">
          <div className="flex flex-col gap-[35px] px-[40px]">
            <div
              className={`hidden md:flex flex-col gap-[10px] text-[50px] font-bold ${poppins.className}`}
            >
              <p className="bg-[#D91E27] px-[10px] py-[4px] max-w-[337px] w-full">
                {data[0].titleLabel}
              </p>
              <p className="bg-[#D91E27] px-[10px] py-[4px] max-w-[618px] w-full">
                {data[0].titleLabelBottom}
              </p>
            </div>

            <div
              className={`flex text-center md:hidden flex-col gap-[10px] text-[30px] md:text-[50px] font-bold ${poppins.className}`}
            >
              <p className="bg-[#D91E27] px-[10px] py-[4px] ">
                {data[0].titleLabel}
                <br></br>
                {data[0].titleLabelBottom}
              </p>
            </div>

            <p className="text-[18px] md:text-[25px] font-bold max-w-[541px] w-full">
              {data[0].title}
            </p>

            <p className="text-[16px] md:text-[20px] font-medium max-w-[729px] w-full text-justify">
              {data[0].desc}
            </p>
          </div>

          <div className="flex flex-col gap-[10px] justify-between backgroundShadow pt-[131px] pb-[33px] px-[40px]">
            <div className="flex items-center gap-[20px]">
              <div
                className={`bg-white px-[10px] py-[7px] text-[#D91E27] text-[20px] md:text-[35px] lg:text-[45px] ${poppins.className}`}
              >
                {data[0].tag}
              </div>
              <p className="text-[25px] font-medium">#SUGCONferencePH2024</p>
            </div>

            <div>
              <p
                className={`px-[34px] py-[6px] text-[8px] md:text-[12px] lg:text-[15px] flex justify-end font-medium`}
              >
                Presented By: {data[0].presented}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
