"use client";

import { Navigation } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationProps {
  data: Navigation[];
}

export default function Navigation({ data }: NavigationProps) {
  const [showContainer, setShowContainer] = useState(false);
  const [active, setActive] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("navigation");
      if (targetElement) {
        const { top, bottom } = targetElement.getBoundingClientRect();
        const threshold = 0;
        const isVisible = top >= threshold && bottom <= window.innerHeight;
        setActive(false);
        setShowContainer(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onNavigate = (url: string) => {
    setActive(false);
    return router.push(url);
  };

  return (
    <>
      <div
        id="navigation"
        className="w-full bg-[#0a0b0b] py-[12px] px-[20px] sm:px-[40px] text-[18px] hidden md:flex flex-col sm:flex-row sm:items-center justify-center gap-[20px] lg:gap-[50px]"
      >
        {data.map((navigation, index) => (
          <p
            className="lg:cursor-pointer"
            onClick={() => onNavigate(navigation.link)}
            key={index}
          >
            {navigation.title}
          </p>
        ))}
      </div>
      {/* 
      <div
        className={`fixed z-[100] top-0 w-full h-[55px] transition-transform transform duration-500 ease-out ${
          showContainer ? "translate-y-0" : "-translate-y-[85px]"
        }`}
      >
        <div
          className={`py-4 px-4 md:px-[40px] bg-[#212529] text-white flex justify-center items-center`}
        >
          <div className="max-w-[1440px] w-full flex items-center justify-between gap-[10px]">
            <Image
              src={"/svgs/sugcon-ph-white.svg"}
              className="w-[226px] h-[45px]"
              alt={""}
              width={226}
              height={45}
            />
            <div className="hidden lg:flex gap-[30px]">
              {data.map((navigation, index) => (
                <p onClick={() => onNavigate(navigation.link)} key={index}>
                  {navigation.title}
                </p>
              ))}
            </div>
            <div className="lg:hidden">
              <div onClick={() => setActive(!active)}>
                <div className={active ? "activeHamburger" : "hamburger"} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#D91E27] w-full h-[5px]"></div>

        <div
          className={`
          ${
            active
              ? `h-screen z-40 duration-0 ease-in-out`
              : "h-screen z-40 transform translate-x-full delay-500 ease-in-out"
          } 
              top-0 right-0 w-full h-full flex justify-end backdrop-blur-[5px] lg:hidden`}
        >
          <div
            className={`
          ${
            active
              ? `z-40 transform transition duration-500 ease-in-out`
              : "z-40 transform translate-x-full transition duration-500 ease-in-out"
          } 
          bg-[#212529] w-full max-w-[300px] relative overflow-y-scroll overflow-x-hidden px-[20px] py-[15px] flex flex-col gap-[20px]
            lg:hidden`}
          >
            {data.map((navigation, index) => (
              <p onClick={() => onNavigate(navigation.link)} key={index}>
                {navigation.title}
              </p>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
