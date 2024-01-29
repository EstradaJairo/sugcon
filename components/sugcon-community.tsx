"use client";

import { Poppins } from "next/font/google";
import { SugconCommunity } from "@/types";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface SugconCommunityProps {
  data: SugconCommunity[];
}

export default function SugconCommunity({ data }: SugconCommunityProps) {
  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <>
      <div className="flex flex-col gap-[44px] items-center  md:px-[55px] pt-[55px]">
        <div className="flex flex-col gap-[9px] items-center">
          <p
            className={`${poppins.className} text-[25px] sm:text-[40px] text-center`}
          >
            {data[0].titleLabel.split(" ").map((word, index) => (
              <span key={index} className={index === 4 ? "text-[#D91E27]" : ""}>
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="text-center max-w-[563px] w-full text-[10px] sm:text-[16px]">
            {data[0].titleDesc}
          </p>
        </div>
        <div className="flex flex-col gap-[17px]">
          {data[0].welcomePhrase.map((phrase, index) => (
            <div
              key={index}
              className="bg-[#2125294D] border-b border-[#C5F1E3] text-[10px] sm:text-[20px] px-[14px] py-[20px] text-center sm:text-start"
            >
              <p>{phrase}</p>
            </div>
          ))}
        </div>
        <div className="md:bg-[#D91E27] flex flex-col items-center w-full md:py-[30px] gap-[9px] md:gap-[30px] sm:gap-[12px] md:p-[20px]">
          <p
            className={`${poppins.className} bg-[#D91E27] px-[18px] py-[16px] md:p-[0px] text-center text-[25px] sm:text-[40px]`}
          >
            {data[0].title}
          </p>
          <div className="flex flex-wrap justify-center gap-[10px] sm:gap-[26px] text-center">
            <div
              onClick={() => {
                onNavigate(`/sugcon/speaker`);
              }}
              className="bg-[#212529] text-[16px] sm:text-[18px] font-bold px-[23px] py-[10px] rounded-[5px] lg:cursor-pointer"
            >
              Be a speaker
            </div>
            <div
              onClick={() => {
                onNavigate(`/sugcon/sponsor`);
              }}
              className="bg-[#212529] text-[16px] sm:text-[18px] font-bold px-[23px] py-[10px] rounded-[5px] lg:cursor-pointer"
            >
              Be a sponsor
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
