"use client";

import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { Toast } from "./toast";

export default function Speaker() {
  const [selectedItem, setSelectedItem] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    company: false,
    email: false,
    phone: false,
    plan: false,
    sypnosis: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    plan: "",
    sypnosis: "",
  });

  const speaker = [
    {
      role: "SPEAKER",
      desc: "Become a speaker at our prestigious event! Elevate your brand, demonstrate thought leadership, and seize lucrative business opportunities in #SUGCONference PH.",
      interest: [
        "Exhibition",
        "Keynote Speakership",
        "Panel Speakership",
        "Branding",
        "One-on-One Meetings",
        "Organize a lunch/cocktail party 1 day before the event",
      ],
      inputFields: [
        {
          name: "name",
          placeholder: "Your Answer",
          validationLabel: "Please enter your full name.",
          title: "Your Full Name*",
          label: "Prefix, First name, Middle Initial, Last Name, Suffix",
        },
        {
          name: "company",
          placeholder: "Your Answer",
          validationLabel: "Please enter the company name.",
          title: "Company Name*",
        },
        {
          name: "email",
          placeholder: "Your Answer",
          validationLabel: "Please enter your email address.",
          title: "Email Address*",
        },
        {
          name: "phone",
          placeholder: "Your Answer",
          validationLabel: "Please enter the phone number with country code.",
          title: "Phone Number*",
          label: "Enter your phone Number with the Country Code",
        },
      ],

      inputFieldsWithQuestion: [
        {
          name: "plan",
          placeholder: "Your Answer",
          validationLabel: "Please fill out this field.",
          question: "What is the topic you plan to speak on?*",
          label: "Make it intriguing as possible!",
        },
        {
          name: "sypnosis",
          placeholder: "Your Answer",
          validationLabel: "Please fill out this field.",
          question: "Please write a brief synopsis of the topic.*",
          label: "Keep It Simple & Straight",
        },
      ],

      hearAboutUs: [
        "Website",
        "Social Media (Facebook or LinkedIn)",
        "Friend or Acquaintance",
        "Others:",
      ],

      questions: ["How did you hear about us?"],
    },
  ];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
    setInvalidEmail(false);
  };

  const handleSendEmail = () => {
    let newErrors = {
      name: false,
      company: false,
      email: false,
      phone: false,
      plan: false,
      sypnosis: false,
    };
    let hasError = false;

    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        newErrors = { ...newErrors, [key]: true };
        hasError = true;
      }
    }

    setErrors(newErrors);

    if (selectedItem === "") {
      setHearAboutUs(true);
      // setIsLoading(false);
    }

    if (!hasError && selectedItem != "") {
      setIsLoading(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name: String(e.target.name.value),
      company: String(e.target.company.value),
      email: String(e.target.email.value),
      phone: String(e.target.phone.value),
      plan: String(e.target.plan.value),
      sypnosis: String(e.target.sypnosis.value),
      hear: selectedItem,
    };

    if (
      data.name != "" &&
      data.company != "" &&
      data.email != "" &&
      data.phone != "" &&
      data.plan != "" &&
      data.sypnosis != "" &&
      data.hear != ""
    ) {
      const response = await fetch("/api/send-email-speaker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        formData.email = "";
        formData.name = "";
        formData.company = "";
        formData.phone = "";
        formData.plan = "";
        formData.sypnosis = "";
        setIsLoading(false);
        setSelectedItem("");
        setToastMessage("Email Sent Successfully.");
        setShowToast(true);
      }

      if (!response.ok) {
        setInvalidEmail(true);
        setIsLoading(false);
        setShowToast(true);
        setToastMessage("Something went wrong.");
      }
    }
  };

  const handleToggle = (item: any) => {
    setHearAboutUs(false);
    const selectedValue = item === selectedItem ? "" : item;
    setSelectedItem(selectedValue);
  };

  return (
    <>
      <div className="flex gap-[31px]">
        <div className="px-[45px] py-[70px] bg-[#F6F5F5] max-w-[1440px] w-full">
          <div className="">
            <p className="text-[42.642px] font-semibold tracking-[8.528px]">
              SUG<span className="text-[#D91E27]">CON</span> PH
            </p>
            <div className="flex gap-[20px] items-center">
              <p className="bg-[#D91E27] text-[16.616px] px-[14px] py-[3px] text-white rounded-[3.5px] w-fit">
                <span className="font-semibold">{speaker[0].role}</span>{" "}
                REGISTRATION FORM
              </p>
              <div className="bg-[#D91E27] max-w-[176.523px] w-full h-[2px]"></div>
            </div>
          </div>
          <p className="text-[18.783px] font-medium leading-[32.03px] max-w-[517.479px] w-full text-justify mt-[33px]">
            {speaker[0].desc}
          </p>
          <div className="mt-[40px] flex flex-col gap-[50px]">
            <form className="flex flex-col gap-[50px]" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[30px]">
                {speaker[0].inputFieldsWithQuestion.map((item, index) => (
                  <div key={index} className="flex flex-col gap-[5px]">
                    <div className="leading-[23px]">
                      <p className="font-medium">{item.question}</p>
                      <p className="text-[#757575]">{item.label}</p>
                    </div>
                    <div className="h-[88px] flex flex-col gap-[6px]">
                      <input
                        type="text"
                        placeholder={item.placeholder}
                        className={`px-[26px] py-[20px] placeholder:text-[#55535399] text-[18.769px] font-medium rounded-[6px] h-[63.209px] max-w-[395.422px] w-full ${
                          errors[item.name as keyof typeof errors]
                            ? "border border-red-700"
                            : "border border-[#55535399]"
                        }`}
                        autoComplete="off"
                        name={item.name}
                        value={formData[item.name as keyof typeof formData]}
                        onChange={handleInputChange}
                      />
                      {errors[item.name as keyof typeof errors] && (
                        <label
                          className="text-[15px] text-[#FF5050] h-[22px]"
                          htmlFor={item.name}
                        >
                          {item.validationLabel}
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-[15px]">
                {speaker[0].inputFields.map((field, index) => (
                  <div className=" flex flex-col" key={index}>
                    <label
                      className="text-[15px] font-medium mb-[5px] h-[22px]"
                      htmlFor={field.name}
                    >
                      {field.title}
                    </label>
                    <label
                      className="text-[15px] text-[#757575] mb-[5px]"
                      htmlFor={field.name}
                    >
                      {field?.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className={`px-[26px] py-[20px] placeholder:text-[#55535399] text-[18.769px] font-medium rounded-[6px] h-[63.209px] max-w-[395.422px] w-full ${
                        errors[field.name as keyof typeof errors]
                          ? "border border-red-700"
                          : "border border-[#55535399]"
                      }`}
                      autoComplete="off"
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                    />
                    <label
                      className="text-[15px] text-[#FF5050] mt-[5px] h-[22px]"
                      htmlFor={field.name}
                    >
                      {errors[field.name as keyof typeof errors] && (
                        <span>{field.validationLabel}</span>
                      )}
                      {invalidEmail && field.name === "email" && (
                        <span>Invalid email address.</span>
                      )}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-[10px] mb-[54px]">
                <div>
                  <p className={`text-[18.783px] font-medium`}>
                    {speaker[0].questions[0]}
                  </p>
                </div>
                <div className="flex flex-col gap-[14px]">
                  <>
                    {speaker[0].hearAboutUs.map((item, index) => (
                      <div className="flex items-center gap-[5px]" key={index}>
                        <div
                          onClick={() => handleToggle(item)}
                          className="w-[20px] h-[20px] border border-black p-[2px] flex items-center justify-center rounded-full lg:cursor-pointer"
                        >
                          {selectedItem === item && (
                            <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
                          )}
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <p className="text-[7.5px] md:text-[15px]">{item}</p>
                          {item === "Others:" && (
                            <input className="text-[7.5px] md:text-[15px] border-b-[1px] border-[#55535399] bg-transparent w-full px-[10px] py-[5px]" />
                          )}
                        </div>
                      </div>
                    ))}
                    <p className="text-[#FF5050] h-[24px]">
                      {hearAboutUs && <span>Please select one.</span>}
                    </p>
                  </>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSendEmail}
                className="bg-[#D91E27] flex items-center justify-center px-[65px] py-[22px]  rounded-[4px] text-[18px] font-semibold text-white w-[194px] h-[71px]"
              >
                {isLoading ? (
                  <Loader className="animate-spin h-[20px] w-[20px] text-white" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="relative z-0 backgroundImage max-w-[485px] w-full ">
          <div className="bg-black opacity-[0.7] w-full h-full"></div>
          <div className="bg-[#D91E27] absolute top-[-29px] right-[-29px] px-[39px] py-[22px] text-[18px] font-semibold text-white text-center w-fit rounded-[4px]">
            Be a speaker
          </div>
        </div>
      </div>
      <Toast
        erroMsg="Something went wrong."
        message={toastMessage}
        show={showToast}
        setShow={setShowToast}
      />
    </>
  );
}
