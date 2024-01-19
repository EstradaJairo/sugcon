"use client";

import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import {} from "next/font/google";
import { useState } from "react";
import { X } from "lucide-react";
import { Events } from "@/types";
import SendEmailForm from "./send-email-form";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
});

interface ExtendedWindow extends Window {
  fd: (type: string, options: any) => void;
}

interface EventsProps {
  data: Events[];
}

export default function Events({ data }: EventsProps) {
  const [openModal, setOpenModal] = useState(false);

  const emailModal = (isOpen: boolean) => {
    setOpenModal(isOpen);
    (window as unknown as ExtendedWindow).fd("form", {
      formId: "6594bf35355de16f50f5dade",
      containerEl: "#fd-form-6594bf35355de16f50f5dade",
    });
  };

  const onNavigate = (url: string) => {
    return window.open(url, "_blank");
  };

  return (
    <>
      <div className="mt-[78px] w-full px-[20px] md:px-[55px] text-center">
        <div className="flex flex-col lg:flex-row gap-[5px] lg:gap-[20px] w-full justify-center items-center pb-[30px] lg:pb-[14px]">
          <p className={`text-[25px] sm:text-[40px] ${poppins.className}`}>
            {data[0].title}
          </p>

          <p
            className={`px-[22px] py-[5px] bg-[#D91E27] text-[16px] sm:text-[20px] ${poppins.className}`}
          >
            {data[0].upcomingEvent}
          </p>
        </div>
        <Image
          src={data[0].eventSrc}
          alt={""}
          width={1182}
          height={400}
          className="object-cover object-center w-full h-[400px]"
        />
        <div className="bg-[#212529] text-[16px] flex flex-col lg:flex-row items-center justify-center gap-[25px] w-full p-[15px]">
          <div className="flex flex-col sm:flex-row items-center gap-[11px]">
            <p>{data[0].tag}</p>
            <div className="bg-[#D91E27] h-[2px] w-full sm:h-[34px] sm:w-[4px]"></div>
            <p>{data[0].location}</p>
          </div>
          <div
            onClick={() => {
              emailModal(true);
            }}
            className="px-[15px] sm:px-[50px] py-[15px] border border-white rounded-[5px] font-medium text-[14px] bg-[#D91E27] lg:cursor-pointer text-center"
          >
            {data[0].waitlistLabel}
          </div>
        </div>
      </div>

      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed px-[30px] inset-0 z-50 flex items-center justify-center backdrop-blur-[5px] `}
      >
        {/* <div className="relative" id="fd-form-6594bf35355de16f50f5dade">
          <X
            onClick={() => setOpenModal(false)}
            width={20}
            height={20}
            className={`absolute z-[1]  right-[20px] top-[20px] lg:cursor-pointer ${
              openModal ? "flex" : "hidden"
            }`}
          />
        </div> */}
        <div className="relative flex flex-col items-center justify-center bg-[#f93e31] p-[30px] gap-[30px]">
          <p className="text-[37px] font-bold">#SUGCONference PH 2024</p>
          <p className="text-[16px]">
            Sign up with your email address to receive all news and updates
            about the upcoming #SUCONference PH 2024
          </p>
          <SendEmailForm
            inputCustomClassName="text-[13px] py-[12px] px-[20px] bg-transparent h-[46px] w-full lg:w-[200px] 2xl:w-[269px] border border-white placeholder:text-white"
            btnLabel="Sign Up"
            btnCustomClassName="bg-black text-[13px] py-[12px] px-[20px]"
          />
          <X
            onClick={() => setOpenModal(false)}
            width={20}
            height={20}
            className={`absolute z-[1]  right-[20px] top-[20px] lg:cursor-pointer ${
              openModal ? "flex" : "hidden"
            }`}
          />
        </div>
      </div>

      <div className="pt-[67px] flex flex-col items-center gap-[48px]">
        <p
          className={`text-[25px] sm:text-[40px] text-center ${inter.className}`}
        >
          {data[0].titleLabel.split(" ").map((word, index) => (
            <span key={index} className={index === 3 ? "text-[#D91E27]" : ""}>
              {word}{" "}
            </span>
          ))}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] xl:grid-cols-4 justify-center items-center mb-[121px]">
          {data[0].events.map((event, index) => (
            <div className="flex items-center gap-[12px]" key={index}>
              <div
                onClick={() => onNavigate(event.link)}
                className="lg:cursor-pointer py-[12px] px-[19px] bg-[#212529] flex items-center gap-[12px] rounded-[5px] h-[72px]"
              >
                <div className="bg-[#EB1F1F] w-[48px] h-[48px] flex items-center justify-center rounded-[5px]">
                  <Image src={event.src} alt={""} width={29} height={28} />
                </div>
                <div className="flex flex-col justify-center gap-[4px]">
                  <div>
                    <Image
                      src={event.srcTitle}
                      alt={""}
                      width={106}
                      height={17.392}
                    />
                  </div>
                  <div
                    className={`flex text-[8px] gap-[4px] ${inter400.className}`}
                  >
                    <p className="text-[#EB1F1F]">{event.location}</p>
                    <p className="text-[#969696]">{event.year}</p>
                  </div>
                </div>
                <div className="w-[40px] h-[40px]">
                  <Image src={event.locSrc} alt={""} width={40} height={40} />
                </div>
              </div>
              {index !== data[0].events.length - 1 && (
                <div className="bg-[#D91E27] h-[94px] w-[2px] rounded-full hidden xl:flex"></div>
              )}

              {(index === 0 || index === 2) && (
                <div className="bg-[#D91E27] h-[94px] w-[2px] rounded-full hidden sm:flex xl:hidden"></div>
              )}
            </div>
          ))}
        </div>
        {/* <p className="text-[19px] text-center max-w-[842px] w-full mb-[121px]">
          {data[0].bottomDesc}
        </p> */}
      </div>
    </>
  );
}
