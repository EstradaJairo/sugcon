"use client";

import { useEffect } from "react";
import { Poppins } from "next/font/google";
import { JoinCommunity } from "@/types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface ExtendedWindow extends Window {
  fd: (type: string, options: any) => void;
}

interface JoinCommunityProps {
  data: JoinCommunity[];
}

export default function JoinCommunity({ data }: JoinCommunityProps) {
  useEffect(() => {
    (window as unknown as ExtendedWindow).fd("form", {
      formId: "65829902638b73c3f4529801",
      containerEl: "#fd-form-65829902638b73c3f4529801",
    });
  }, []);

  return (
    <>
      <div className="w-full px-[20px] md:px-[50px] py-[50px]">
        <div className="px-[50px] md:px-[142px] py-[14px] bg-[#D91E27] flex flex-col items-center gap-[7px] justify-center text-center">
          <p className={`text-[30px] md:text-[50px] ${poppins.className}`}>
            {data[0].titleLabel}
          </p>
          <p className="max-w-[656px] w-full text-[12px] md:text-[18px] font-semibold tracking-[4px] text-center">
            {data[0].titleDesc}
          </p>
        </div>
        <div id="fd-form-65829902638b73c3f4529801"></div>
        <div className="bg-[#757575] rounded-[36px] w-full h-[1px]"></div>
        <div className="py-[30px] w-full flex flex-col gap-[20px] md:flex-row justify-between items-center text-[15px]">
          <p className="text-[#BFBFBF] text-center sm:text-start">
            {data[0].tag}
          </p>
          <p className="bg-[#D91E27] px-[31px] py-[6px] w-[200px] h-[35px] text-center">
            {data[0].date}
          </p>
        </div>
      </div>
    </>
  );
}
