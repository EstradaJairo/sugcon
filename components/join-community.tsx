"use client";

import { useEffect } from "react";
import { Poppins } from "next/font/google";
import { JoinCommunity } from "@/types";
import SendEmailForm from "./send-email-form";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface JoinCommunityProps {
  data: JoinCommunity[];
}

export default function JoinCommunity({ data }: JoinCommunityProps) {
  return (
    <>
      <div className="w-full px-[20px] md:px-[50px] py-[50px]">
        <div className="px-[50px] md:px-[142px] py-[14px] bg-[#D91E27] flex flex-col items-center gap-[7px] justify-center text-center">
          <p className={`text-[20px] md:text-[50px] ${poppins.className}`}>
            {data[0].titleLabel}
          </p>
          <p className="max-w-[656px] w-full text-[8px] md:text-[18px] font-semibold tracking-[1.6px] md:tracking-[4px] text-center">
            {data[0].titleDesc}
          </p>
        </div>
        <div className="p-[30px]">
          <SendEmailForm
            inputCustomClassName="text-[13px] py-[12px] px-[20px] bg-[#212529] h-[43px] w-full lg:w-[200px] 2xl:w-[269px] rounded-[4px]"
            btnLabel="Subscribe"
            btnCustomClassName="rounded-[4px] bg-[#EB2020] text-[16px] w-[132px] h-[43px] flex items-center justify-center font-bold py-[9px] px-[22px]"
          />
        </div>
        <div className="bg-[#757575] rounded-[36px] w-full h-[1px]"></div>
        <div className="py-[30px] w-full flex flex-col gap-[20px] md:flex-row justify-between items-center ">
          <p className="text-[#BFBFBF] text-center sm:text-start text-[10px] md:text-[15px]">
            {data[0].tag}
          </p>
          <p className="bg-[#D91E27] px-[31px] py-[6px] w-[200px] h-[35px] text-center text-[15px]">
            {data[0].date}
          </p>
        </div>
      </div>
    </>
  );
}
