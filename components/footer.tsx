"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { X } from "lucide-react";
import { Footer } from "@/types";
import ContactUsForm from "./contact-us-form";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

interface FooterProps {
  data: Footer[];
}

export default function Footer({ data }: FooterProps) {
  const [openModal, setOpenModal] = useState(false);

  const contactModal = (isOpen: boolean) => {
    setOpenModal(isOpen);
  };

  return (
    <>
      <div className="p-[47px] md:py-[53px] md:px-[53px] flex flex-col md:flex-row md:items-center md:justify-between max-w-[1440px] w-full h-fit md:h-[253px] gap-[30px]">
        <Image
          src={data[0].srcLogo}
          alt={""}
          className="w-[206.343px] h-[59.919px] md:w-[298.735px] md:h-[86.749px]"
          width={298.735}
          height={86.749}
        />
        <div
          className={`${inter.className} flex flex-col gap-[11px] md:gap-[10px] items-start md:items-end font-semibold text-[#212223]`}
        >
          <div
            onClick={() => contactModal(true)}
            className={`flex items-center md:h-[46px] justify-center gap-[11px] text-[13px] md:text-[20px] lg:cursor-pointer text-white bg-[#D91E27] w-[151px] md:w-[220px] py-[7px] px-[7px] md:py-[10px] md:px-[10px] rounded-[3px] md:rounded-[10px]`}
          >
            <Image
              className="w-[18px] h-[18px] md:w-[26px] md:h-[26px]"
              src={"/icons/contact-white.png"}
              alt={""}
              width={26}
              height={26}
            />
            <p>{data[0].label}</p>
          </div>
          <p className="w-full text-[13px] md:text-[20px]">
            {" "}
            {data[0].copyright.split(" ").map((word, index) => (
              <span key={index} className={index === 4 ? "text-[#D91E27]" : ""}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div
        className={`${
          openModal ? "flex" : "hidden"
        } fixed px-[30px] inset-0 z-50 flex items-center justify-center backdrop-blur-[5px] `}
      >
        <div className="relative bg-[#212529] flex flex-col gap-[20px] p-[30px] text-center">
          <X
            onClick={() => setOpenModal(false)}
            width={20}
            height={20}
            className={`absolute z-[1]  right-[20px] top-[20px] lg:cursor-pointer ${
              openModal ? "flex" : "hidden"
            }`}
          />
          <p className="text-[50px] font-bold helvetica">Contact Us</p>
          <p className="text-[16px] helvetica">
            Send us your questions and concerns about the event!
          </p>
          <div>
            <ContactUsForm
              inputCustomClassName="text-[13px] py-[12px] px-[20px] bg-transparent h-[42px] w-full lg:w-[200px] 2xl:w-[269px] rounded-[4px] placeholder:text-white"
              btnLabel="Submit"
              btnCustomClassName="rounded-[4px] bg-white text-black text-[16px] w-[123px] h-[42px] flex items-center justify-center font-bold py-[9px] px-[22px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
