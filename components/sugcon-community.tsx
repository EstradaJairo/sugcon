"use client";

import { Poppins } from "next/font/google";
// import { useState } from "react";
// import { X } from "lucide-react";
import { SugconCommunity } from "@/types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

// interface ExtendedWindow extends Window {
//   fd: (type: string, options: any) => void;
// }

interface SugconCommunityProps {
  data: SugconCommunity[];
}

export default function SugconCommunity({ data }: SugconCommunityProps) {
  // const [openSpeakerModal, setOpenSpeakerModal] = useState(false);
  // const [openSponsorModal, setOpenSponsorModal] = useState(false);

  // const speakerModal = (isOpen: boolean) => {
  //   setOpenSpeakerModal(isOpen);
  //   (window as unknown as ExtendedWindow).fd("form", {
  //     formId: "6585391ed438be5a628a8a9d",
  //     containerEl: "#fd-form-6585391ed438be5a628a8a9d",
  //   });
  // };

  // const sponsorModal = (isOpen: boolean) => {
  //   setOpenSponsorModal(isOpen);
  //   (window as unknown as ExtendedWindow).fd("form", {
  //     formId: "65853aa7c24bb9aa39c2888c",
  //     containerEl: "#fd-form-65853aa7c24bb9aa39c2888c",
  //   });
  // };
  const onNavigate = (url: string) => {
    return window.open(url, "_blank");
  };

  return (
    <>
      <div className="flex flex-col gap-[44px] items-center px-[20px] md:px-[55px] pt-[55px]">
        <div className="flex flex-col gap-[9px] items-center">
          <p
            className={`${poppins.className} text-[20px] sm:text-[40px] text-center`}
          >
            {data[0].titleLabel.split(" ").map((word, index) => (
              <span key={index} className={index === 4 ? "text-[#D91E27]" : ""}>
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="text-center max-w-[563px] w-full text-[12px] sm:text-[16px]">
            {data[0].titleDesc}
          </p>
        </div>
        <div className="flex flex-col gap-[17px]">
          {data[0].welcomePhrase.map((phrase, index) => (
            <div
              key={index}
              className="bg-[#212529] border border-[#C5F1E3] rounded-[4px] text-[16px] sm:text-[20px] px-[14px] py-[20px] text-center sm:text-start"
            >
              <p>{phrase}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#D91E27] flex flex-col items-center w-full py-[30px] gap-[30px] sm:gap-[12px] p-[20px]">
          <p
            className={`${poppins.className} text-center text-[20px] sm:text-[40px]`}
          >
            {data[0].title}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[26px] text-center">
            <div
              onClick={() => {
                onNavigate(data[0].speakerURL);
              }}
              className="bg-[#212529] text-[12px] sm:text-[18px] font-bold px-[23px] py-[10px] rounded-[5px] lg:cursor-pointer"
            >
              Be a speaker
            </div>
            <div
              onClick={() => {
                onNavigate(data[0].sponsorURL);
              }}
              className="bg-[#212529] text-[12px] sm:text-[18px] font-bold px-[23px] py-[10px] rounded-[5px] lg:cursor-pointer"
            >
              Be a sponsor
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`${
          openSpeakerModal ? "flex" : "hidden"
        } fixed px-[30px] inset-0 z-50 flex items-center justify-center backdrop-blur-[5px] `}
      >
        <div className="relative" id="fd-form-6585391ed438be5a628a8a9d">
          <X
            onClick={() => setOpenSpeakerModal(false)}
            width={20}
            height={20}
            className={`absolute z-[1]  right-[20px] top-[20px] lg:cursor-pointer ${
              openSpeakerModal ? "flex" : "hidden"
            }`}
          />
        </div>
      </div>

      <div
        className={`${
          openSponsorModal ? "flex" : "hidden"
        } fixed px-[30px] inset-0 z-50 flex items-center justify-center backdrop-blur-[5px] `}
      >
        <div className="relative" id="fd-form-65853aa7c24bb9aa39c2888c">
          <X
            onClick={() => setOpenSponsorModal(false)}
            width={20}
            height={20}
            className={`absolute z-[1]  right-[20px] top-[20px] lg:cursor-pointer ${
              openSponsorModal ? "flex" : "hidden"
            }`}
          />
        </div>
      </div> */}
    </>
  );
}
