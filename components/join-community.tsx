"use client";

import { useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface ExtendedWindow extends Window {
  fd: (type: string, options: any) => void;
}

export default function JoinCommunity() {
  useEffect(() => {
    (window as unknown as ExtendedWindow).fd("form", {
      formId: "65829902638b73c3f4529801",
      containerEl: "#fd-form-65829902638b73c3f4529801",
    });
  }, []);

  const dataContent = [
    {
      src: "/imgs/sugcon-conference.jpg",
      titleLabel: "Join the #SUGCON PH Community!",
      titleDesc:
        "Sign up with your email address to receive all news and updates about Sitecore!",
      tag: "Use the hashtag #SUGCONferencePH2024 and tag us! @SUGCONPH",
      date: "MARCH 2024",
    },
  ];

  return (
    <>
      <div className="w-full px-[50px] py-[10px]">
        <div className="px-[142px] py-[14px] bg-[#D91E27] flex flex-col items-center gap-[7px]">
          <p className={`text-[50px] ${poppins.className}`}>
            {dataContent[0].titleLabel}
          </p>
          <p className="max-w-[656px] w-full text-[18px] font-semibold tracking-[4px] text-center">
            {dataContent[0].titleDesc}
          </p>
        </div>
        <div id="fd-form-65829902638b73c3f4529801"></div>
        <div className="bg-[#757575] rounded-[36px] w-full h-[1px]"></div>
        <div className="py-[30px] flex justify-between items-center text-[15px]">
          <p className="text-[#BFBFBF]">{dataContent[0].tag}</p>
          <p className="bg-[#D91E27] px-[31px] py-[6px]">
            {dataContent[0].date}
          </p>
        </div>
      </div>
    </>
  );
}
