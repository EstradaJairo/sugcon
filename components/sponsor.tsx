"use client";

import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Toast } from "./toast";
import { Loader } from "lucide-react";

export default function Sponsor() {
  const [hearAboutUs, setHearAboutUs] = useState(false);
  const [interest, setInterest] = useState(false);
  const [selectedItemHear, setSelectedItemHear] = useState("");
  const [selectedItemInterest, setSelectedItemInterest] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    company: false,
    email: false,
    phone: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

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
    };
    let hasError = false;

    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        newErrors = { ...newErrors, [key]: true };
        hasError = true;
      }
    }

    setErrors(newErrors);

    if (selectedItemHear === "") {
      setHearAboutUs(true);
      // setIsLoading(false);
    }

    if (selectedItemInterest === "") {
      setInterest(true);
      // setIsLoading(false);
    }

    if (!hasError && selectedItemHear != "" && selectedItemInterest != "") {
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
      interest: selectedItemInterest,
      hear: selectedItemHear,
    };

    if (
      data.name != "" &&
      data.company != "" &&
      data.email != "" &&
      data.phone != "" &&
      data.interest != "" &&
      data.hear != ""
    ) {
      const response = await fetch("/api/send-email-sponsor", {
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
        setIsLoading(false);
        setToastMessage("Email Sent Successfully.");
        setShowToast(true);
        setSelectedItemHear("");
        setSelectedItemInterest("");
      }

      if (!response.ok) {
        setInvalidEmail(true);
        setIsLoading(false);
        setShowToast(true);
        setToastMessage("Something went wrong.");
      }
    }
  };

  const handleToggleHear = (item: any) => {
    setHearAboutUs(false);
    const selectedHearValue = item === selectedItemHear ? "" : item;
    setSelectedItemHear(selectedHearValue);
    console.log("Hear:", selectedHearValue);
  };

  const handleToggleInterest = (item: any) => {
    setInterest(false);
    const selectedInterestValue = item === selectedItemInterest ? "" : item;
    setSelectedItemInterest(selectedInterestValue);
    console.log("Interest:", selectedInterestValue);
  };

  const sponsor = [
    {
      role: "SPONSORSHIP",
      desc: "Showcase your brand, thought leadership, launch your latest products and win business at the ultimate platform for SUGCON PH.",
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
      hearAboutUs: [
        "Website",
        "Social Media (Facebook or LinkedIn)",
        "Friend or Acquaintance",
        "Others:",
      ],
      questions: [
        "What are you most interested in?*",
        "How did you hear about us?",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col-reverse gap-[7px] lg:flex-row lg:gap-[31px]">
        <div className="px-[22px] py-[34px] lg:px-[45px] lg:py-[70px] rounded-[3px] lg:rounded-none bg-[#F6F5F5] max-w-[1440px] w-full">
          <div className="">
            <p className="text-[21px] md:text-[42.642px] font-semibold tracking-[8.528px]">
              SUG<span className="text-[#D91E27]">CON</span> PH
            </p>
            <div className="flex gap-[20px] items-center">
              <p className="bg-[#D91E27] text-[8px] md:text-[16.616px] px-[14px] py-[3px] text-white rounded-[3.5px] min-w-[163px] w-fit">
                <span className="font-semibold">{sponsor[0].role}</span>{" "}
                REGISTRATION FORM
              </p>
              <div className="bg-[#D91E27] max-w-[176.523px] w-full h-[2px]"></div>
            </div>
          </div>
          <p className="text-[9px] md:text-[18.783px] font-medium md:leading-[32.03px] max-w-[517.479px] w-full text-justify mt-[16px] md:mt-[33px]">
            {sponsor[0].desc}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[14px] md:gap-[28px] mb-[27px] md:mb-[54px]">
              <p className="text-[9px] md:text-[18.783px] font-medium mt-[21px] md:mt-[43px]">
                {sponsor[0].questions[0]}
              </p>
              <div className="flex flex-col gap-[7px] md:gap-[14px]">
                <>
                  {sponsor[0].interest.map((item, index) => (
                    <div className="flex items-center gap-[5px]" key={index}>
                      <div
                        onClick={() => handleToggleInterest(item)}
                        className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] border border-black p-[2px] flex items-center justify-center rounded-full"
                      >
                        {selectedItemInterest === item && (
                          <div className="w-[5px] h-[5px] md:w-[10px] md:h-[10px] bg-black rounded-full"></div>
                        )}
                      </div>
                      <p className="text-[7.5px] md:text-[15px]">{item}</p>
                    </div>
                  ))}
                  <p className="text-[#FF5050] h-[11px] md:h-[24px] text-[7.5px] md:text-[15px]">
                    {interest && <span>Please select one.</span>}
                  </p>
                </>
              </div>
            </div>

            <div className="flex flex-col gap-[15px]">
              {sponsor[0].inputFields.map((field, index) => (
                <div className=" flex flex-col gap-[5px]" key={index}>
                  <div className="flex flex-col">
                    <label
                      className="text-[7.5px] md:text-[15px] font-medium"
                      htmlFor={field.name}
                    >
                      {field.title}
                    </label>
                    <label
                      className="text-[7.5px] md:text-[15px] text-[#757575]"
                      htmlFor={field.name}
                    >
                      {field?.label}
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className={`px-[13px] py-[10px] md:px-[26px] md:py-[20px] placeholder:text-[#55535399] text-[9px] md:text-[18.769px] font-medium rounded-[6px] h-[31.667px] md:h-[63.209px] max-w-[395.422px] w-full ${
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
                    className="text-[7.5px] md:text-[15px] text-[#FF5050] h-[12px] md:h-[22px]"
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

            <div className="flex flex-col gap-[14px] md:gap-[28px] mb-[36px] md:mb-[54px]">
              <p className="text-[9px] md:text-[18.783px] font-medium mt-[27px] md:mt-[43px]">
                {sponsor[0].questions[1]}
              </p>
              <div className="flex flex-col gap-[7px] md:gap-[14px]">
                <>
                  {sponsor[0].hearAboutUs.map((item, index) => (
                    <div className="flex items-center gap-[5px]" key={index}>
                      <div
                        onClick={() => handleToggleHear(item)}
                        className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] border border-black p-[2px] flex items-center justify-center rounded-full"
                      >
                        {selectedItemHear === item && (
                          <div className="w-[5px] h-[5px] md:w-[10px] md:h-[10px] bg-black rounded-full"></div>
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
                  <p className="text-[#FF5050] h-[11px] md:h-[24px] text-[7.5px] md:text-[15px]">
                    {hearAboutUs && <span>Please select one.</span>}
                  </p>
                </>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSendEmail}
              className="bg-[#D91E27] py-[10px] px-[32px] md:px-[65px] md:py-[22px] text-center rounded-[4px] text-[9.409px] md:ext-[18px] font-semibold text-white flex items-center justify-center w-[98.38px] h-[35.755px] md:w-[194px] md:h-[71px]"
            >
              {isLoading ? (
                <Loader className="animate-spin h-[20px] w-[20px] text-white" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <div className="hidden lg:flex relative z-0 backgroundImage w-full max-w-[485px]">
          <div className="bg-black opacity-[0.7] w-full h-full"></div>
          <div className="bg-[#D91E27] absolute top-[-29px] right-[-29px] px-[39px] py-[22px] text-[18px] font-semibold text-white text-center w-fit rounded-[4px]">
            Be a sponsor
          </div>
        </div>

        <div className="relative z-0">
          <div className="flex lg:hidden justify-center backgroundImage h-[133px] w-full">
            <div className="bg-black opacity-[0.7] w-full h-full"></div>
            <div className="bg-[#D91E27] absolute top-[-10px] px-[27px] py-[15px] text-[13px] font-semibold text-white text-center w-fit rounded-[4px]">
              Be a sponsor
            </div>
          </div>
        </div>

        {/* <div className="relative h-full w-full lg:max-w-[485px]">
          <Image
            className="object-cover object-center w-full h-[133.051px] lg:w-[2829.938px] lg:h-[1749px]"
            src={"/imgs/banner.jpg"}
            alt={""}
            width={2829.938}
            height={1749}
          />
          <div className="bg-black opacity-[0.7] w-full h-[133.051px] lg:h-[1749px] absolute top-0"></div>
          <div className="bg-[#D91E27] absolute top-[-29px] right-[-29px] px-[39px] py-[22px] text-[18px] font-semibold text-white text-center w-fit rounded-[4px]">
            Be a sponsor
          </div>
        </div> */}
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
