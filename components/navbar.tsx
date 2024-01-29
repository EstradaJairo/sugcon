"use client";

import { Navbar, Navigation } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContactUsForm from "./contact-us-form";

interface NavbarProps {
  data: Navbar[];
  navigationData: Navigation[];
}

export default function Navbar({ data, navigationData }: NavbarProps) {
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const onNavigate = (url: string) => {
    setActive(false);
    return router.push(url);
  };

  const contactModal = (isOpen: boolean) => {
    setOpenModal(isOpen);
    setActive(false);
  };

  return (
    <>
      <p className="hidden md:flex justify-center text-[8px] sm:text-[13px] tracking-[4px] font-medium text-[#BFBFBF] w-full py-[15px] text-center">
        {data[0].text}
      </p>
      <div className="w-full h-[66px] md:h-[135px] fixed z-10 top-0 md:static">
        <div className="bg-[#070707] md:bg-[#212529] h-full p-[20px] lg:p-[40px] flex items-center justify-between gap-[50px] ">
          <div className="w-[91px] h-[18px] md:w-[226px] md:h-[45px]">
            <Image
              onClick={() => onNavigate("/")}
              src={data[0].logo}
              className={`w-[91px] h-[18px] md:w-[226px] md:flex md:h-[45px] lg:cursor-pointer ${
                active ? "hidden" : "flex"
              }`}
              alt={""}
              width={226}
              height={45}
            />
          </div>

          <div className="items-center hidden md:flex md:justify-end gap-[25px] w-full">
            {/* {data[0].partners.map((src, index) => (
              <div className="relative" key={index}>
                <p className="hidden md:flex text-[6px] font-medium text-[#939393] absolute top-[1px] left-[60px] tracking-[1.888px]">
                  {src.label}
                </p>
                <Image
                  src={src}
                  alt={""}
                  width={src.width}
                  height={src.height}
                />
              </div>
            ))} */}

            <div className="relative">
              <p className="hidden md:flex text-[6px] font-medium text-[#939393] absolute top-[1px] left-[60px] tracking-[1.888px]">
                {data[0].partners[1].label}
              </p>
              <Image
                className={`w-[51.459px] h-[16.54px] sm:w-[100px] sm:h-[30px]  md:w-[138px] md:h-[43px]`}
                src={data[0].partners[1].src}
                alt={""}
                width={data[0].partners[1].width}
                height={data[0].partners[1].height}
              />
            </div>

            <div className="relative">
              <p className="hidden md:flex text-[6px] font-medium text-[#939393] absolute top-[1px] left-[60px] tracking-[1.888px]">
                {data[0].partners[0].label}
              </p>
              <Image
                className={`w-[76.312px] h-[16.192px] sm:w-[150px] sm:h-[30px] md:w-[207px] md:h-[44px]`}
                src={data[0].partners[0].src}
                alt={""}
                width={data[0].partners[0].width}
                height={data[0].partners[0].height}
              />
            </div>

            <div className="relative">
              <p className="hidden md:flex text-[6px] font-medium text-[#939393] absolute top-[1px] left-[60px] tracking-[1.888px]">
                {data[0].partners[2].label}
              </p>
              <Image
                className={`w-[20.788px] h-[26.483px] sm:w-[30.788px] sm:h-[50px] md:w-[48px] md:h-[73px]`}
                src={data[0].partners[2].src}
                alt={""}
                width={data[0].partners[2].width}
                height={data[0].partners[2].height}
              />
            </div>
          </div>

          <div className="bg-[#2125294D] p-[10px] h-[34px] md:hidden flex items-center">
            <div onClick={() => setActive(!active)}>
              <div className={active ? "activeHamburger" : "hamburger"} />
            </div>
          </div>
        </div>
        <div className="bg-[#D91E27] w-full h-[5px] flex md:hidden"></div>
        <div
          className={`absolute
          ${
            active
              ? `h-screen z-40 duration-0 ease-in-out`
              : "h-screen z-40 transform translate-x-full delay-500 ease-in-out"
          } 
              top-0 right-0 w-full flex justify-end backdrop-blur-[5px] md:hidden`}
        >
          <div
            className={`
    ${
      active
        ? `z-40 transform transition duration-500 ease-in-out`
        : "z-40 transform translate-x-full transition duration-500 ease-in-out"
    } 
    bg-[#070707] w-full max-w-[300px] relative flex flex-col overflow-y-scroll overflow-x-hidden px-[18px] pt-[16px] pb-[27px] 
  `}
          >
            <div>
              <div className="flex items-center justify-between mb-[19px]">
                <Image
                  src={data[0].logo}
                  className="w-[91px] h-[18px]"
                  alt={""}
                  width={91}
                  height={18}
                />
                <div className="bg-[#2125294D] p-[10px] h-[34px] md:hidden flex items-center">
                  <div onClick={() => setActive(!active)}>
                    <div className={active ? "activeHamburger" : "hamburger"} />
                  </div>
                </div>
              </div>

              <div className="bg-[#EB1F1F] w-full h-[0.5px] mb-[32px]"></div>

              <p className="text-[#FFFFFFCC] text-[14px] mb-[40px]">General</p>

              <div className="flex flex-col gap-[20px]">
                {navigationData.slice(0, -1).map((navigation, index) => (
                  <p
                    className="text-[16px] "
                    onClick={() => onNavigate(navigation.link)}
                    key={index}
                  >
                    {navigation.title}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-auto gap-[12px]">
              <div className="flex items-center gap-[16px]">
                <Image
                  src={data[0].partners[0].src}
                  alt={""}
                  width={76.312}
                  height={16.192}
                />
                <Image
                  src={data[0].partners[1].src}
                  alt={""}
                  width={59.459}
                  height={19.112}
                />
                <Image
                  src={data[0].partners[2].src}
                  alt={""}
                  width={20.788}
                  height={26.483}
                />
              </div>
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
                <p>Contact Us</p>
              </div>
            </div>
          </div>
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
