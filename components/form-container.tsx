"use client";

import React, { useState } from "react";
import Speaker from "./speaker";
import Sponsor from "./sponsor";
import { useParams, useRouter } from "next/navigation";

export default function FormContainer() {
  const params = useParams();
  const [selectedOption, setSelectedOption] = useState(params.slug);
  const router = useRouter();

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="flex gap-[35px] text-[16px] font-medium w-full justify-center p-[20px]">
        <p
          className={`lg:cursor-pointer ${
            selectedOption === "speaker" ? "text-[#FFFFFF4D]" : "text-white"
          }`}
          onClick={() => {
            handleOptionClick("speaker");
            onNavigate(`/sugcon/speaker`);
          }}
        >
          Be a Speaker
        </p>
        <p
          className={`lg:cursor-pointer ${
            selectedOption === "sponsor" ? "text-[#FFFFFF4D]" : "text-white"
          }`}
          onClick={() => {
            handleOptionClick("sponsor");
            onNavigate(`/sugcon/sponsor`);
          }}
        >
          Be a Sponsor
        </p>
      </div>

      <div className="flex justify-center">
        <div className="pt-[25px] md:bg-white md:p-[60px] max-w-[1440px] w-full text-[#414141] rounded-[10px]">
          {selectedOption === "speaker" && <Speaker />}
          {selectedOption === "sponsor" && <Sponsor />}
        </div>
      </div>
    </>
  );
}
