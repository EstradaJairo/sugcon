"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface ExtendedWindow extends Window {
  fd: (type: string, options: any) => void;
}

export default function SugconCommunity() {
  const [openSpeakerModal, setOpenSpeakerModal] = useState(false);
  const [openSponsorModal, setOpenSponsorModal] = useState(false);

  const speakerModal = (isOpen: boolean) => {
    setOpenSpeakerModal(isOpen);
    (window as unknown as ExtendedWindow).fd("form", {
      formId: "6585391ed438be5a628a8a9d",
      containerEl: "#fd-form-6585391ed438be5a628a8a9d",
    });
  };

  const sponsorModal = (isOpen: boolean) => {
    setOpenSponsorModal(isOpen);
    (window as unknown as ExtendedWindow).fd("form", {
      formId: "65853aa7c24bb9aa39c2888c",
      containerEl: "#fd-form-65853aa7c24bb9aa39c2888c",
    });
  };

  const dataContent = [
    {
      titleLabel: "Why Join the SUGCON Community?",
      titleDesc:
        "Join an immersive experience where learning is not just a task but a delightful exploration.",
      welcomePhrase: [
        "#SUGCON is where the thrill of discovery meets the warmth of camaraderie, creating memories that will leave you inspired and smiling long after the event concludes.",
        "Get ready to embrace the excitement, share the laughter, and become part of a community that believes in making every learning moment a celebration!",
      ],
      title: "Unleash the ITGeek in you!",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-[44px] items-center p-[55px]">
        <div className="flex flex-col gap-[9px] items-center">
          <p className={`${poppins.className} text-[40px]`}>
            {dataContent[0].titleLabel.split(" ").map((word, index) => (
              <span key={index} className={index === 4 ? "text-[#D91E27]" : ""}>
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="text-center max-w-[563px] w-full text-[16px]">
            {dataContent[0].titleDesc}
          </p>
        </div>
        <div className="flex flex-col gap-[17px]">
          {dataContent[0].welcomePhrase.map((phrase, index) => (
            <div
              key={index}
              className="bg-[#212529] border border-[#C5F1E3] rounded-[4px] text-[20px] px-[14px] py-[20px]"
            >
              <p>{phrase}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#D91E27] flex flex-col items-center w-full py-[30px] gap-[12px]">
          <p className={`${poppins.className} text-[40px]`}>
            {dataContent[0].title}
          </p>
          <div className="flex gap-[26px]">
            <div
              onClick={() => {
                speakerModal(true);
              }}
              className="bg-[#212529] text-[18px] font-bold px-[23px] py-[10px] rounded-[5px] lg:cursor-pointer"
            >
              Be a speaker
            </div>
            <div
              onClick={() => {
                sponsorModal(true);
              }}
              className="bg-[#212529] text-[18px] font-bold px-[23px] py-[10px] rounded-[5px] lg:cursor-pointer"
            >
              Be a sponsor
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openSpeakerModal ? "flex" : "hidden"
        } fixed px-[30px] inset-0 z-50 flex items-center justify-center backdrop-blur-[5px] `}
      >
        <div className="relative" id="fd-form-6585391ed438be5a628a8a9d">
          <X
            onClick={() => setOpenSpeakerModal(false)}
            width={20}
            height={20}
            className={`absolute z-[1]  right-[20px] top-[20px] ${
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
            className={`absolute z-[1]  right-[20px] top-[20px] ${
              openSponsorModal ? "flex" : "hidden"
            }`}
          />
        </div>
      </div>
    </>
  );
}
