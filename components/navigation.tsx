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

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("navigation");
      if (targetElement) {
        const { top, bottom } = targetElement.getBoundingClientRect();
        const threshold = 0;
        const isVisible = top >= threshold && bottom <= window.innerHeight;
        setShowContainer(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <>
      <div
        id="navigation"
        className="w-full bg-[#0a0b0b] py-[12px] px-[40px] text-[18px] flex items-center justify-center gap-[50px]"
      >
        {data.map((navigation, index) => (
          <p onClick={() => onNavigate(navigation.link)} key={index}>
            {navigation.title}
          </p>
        ))}
      </div>

      <div
        className={`fixed z-[100] top-0 w-full transition-transform transform duration-500 ease-out ${
          showContainer ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`p-4 bg-[#212529] text-white flex justify-center items-center`}
        >
          <div className="max-w-[1440px] w-full flex justify-between">
            <Image
              src={"/imgs/sugcon-ph.png"}
              alt={""}
              width={226}
              height={45}
            />
            <div className="flex gap-[30px]">
              {data.map((navigation, index) => (
                <p onClick={() => onNavigate(navigation.link)} key={index}>
                  {navigation.title}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#D91E27] w-full h-[5px]"></div>
      </div>
    </>
  );
}
