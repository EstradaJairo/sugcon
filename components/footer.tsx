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

// interface ExtendedWindow extends Window {
//   fd: (type: string, options: any) => void;
// }

interface FooterProps {
  data: Footer[];
}

export default function Footer({ data }: FooterProps) {
  const [openModal, setOpenModal] = useState(false);

  const contactModal = (isOpen: boolean) => {
    setOpenModal(isOpen);
    // (window as unknown as ExtendedWindow).fd("form", {
    //   formId: "6582b74d268c1edc26085cb6",
    //   containerEl: "#fd-form-6582b74d268c1edc26085cb6",
    // });
  };

  return (
    <>
      <div className="py-[53px] px-[53px] flex flex-col md:flex-row md:items-center md:justify-between max-w-[1440px] w-full h-fit md:h-[253px] gap-[30px]">
        <Image src={data[0].srcLogo} alt={""} width={298.735} height={86.749} />
        <div
          className={`${inter.className} flex flex-col gap-[30px] md:gap-[10px] items-end font-semibold text-[#212223]`}
        >
          <div
            onClick={() => contactModal(true)}
            className={`flex gap-[11px] items-center lg:cursor-pointer text-white bg-[#D91E27] py-[15px] px-[30px] rounded-[10px]`}
          >
            <Image
              src={"/icons/contact-white.png"}
              alt={""}
              width={36}
              height={36}
            />
            <p>{data[0].label}</p>
          </div>
          <p className="text-center md:text-start w-full ">
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
