import Image from "next/image";
import { Poppins } from "next/font/google";
import { Sugcon } from "@/types";
import { useState } from "react";
import { Loader } from "lucide-react";
import { Toast } from "./toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface SendEmailFormProps {
  //   data: Sugcon[];
  inputCustomClassName: string;
  btnLabel: string;
  btnCustomClassName: string;
}

export default function ContactUsForm({
  inputCustomClassName,
  btnLabel,
  btnCustomClassName,
}: SendEmailFormProps) {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    emailAddress: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    message: false,
    emailAddress: false,
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
      message: false,
      emailAddress: false,
    };
    let hasError = false;

    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        newErrors = { ...newErrors, [key]: true };
        hasError = true;
      }
    }

    setErrors(newErrors);

    if (!hasError) {
      setIsLoading(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name: String(e.target.name.value),
      message: String(e.target.message.value),
      emailAddress: String(e.target.emailAddress.value),
    };

    if (data.name != "" && data.message != "" && data.emailAddress != "") {
      const response = await fetch("/api/send-email-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        formData.emailAddress = "";
        formData.name = "";
        formData.message = "";
        setIsLoading(false);
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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col lg:flex-row gap-[20px] items-center lg:items-start justify-center"
      >
        <div className="flex w-full lg:w-fit flex-col items-start gap-[5px] h-[62px]">
          <input
            type="text"
            placeholder="Name"
            className={`${inputCustomClassName} ${
              errors.name ? "border border-red-700" : "border border-white"
            }`}
            autoComplete="off"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <label className="text-[10px] text-[#FF5050]" htmlFor="name">
              Please enter your name.
            </label>
          )}
        </div>

        <div className="flex w-full lg:w-fit flex-col items-start gap-[5px] h-[62px]">
          <input
            type="text"
            placeholder="Email Address"
            className={`${inputCustomClassName} ${
              errors.emailAddress
                ? "border border-red-700"
                : "border border-white"
            }`}
            autoComplete="off"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
          {errors.emailAddress && (
            <label
              className="text-[10px] text-[#FF5050]"
              htmlFor="emailAddress"
            >
              <span>Please enter your email address.</span>
            </label>
          )}
          {invalidEmail && (
            <label
              className="text-[10px] text-[#FF5050]"
              htmlFor="emailAddress"
            >
              <span>Invalid email address.</span>
            </label>
          )}
        </div>

        <div className="flex w-full lg:w-fit flex-col items-start gap-[5px] h-[62px]">
          <input
            type="text"
            placeholder="Write Message"
            className={`${inputCustomClassName} ${
              errors.message ? "border border-red-700" : "border border-white"
            }`}
            autoComplete="off"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && (
            <label className="text-[10px] text-[#FF5050]" htmlFor="message">
              Please write a message.
            </label>
          )}
        </div>

        <button
          type="submit"
          onClick={handleSendEmail}
          className={btnCustomClassName}
        >
          {isLoading ? (
            <Loader className="animate-spin h-[20px] w-[20px] text-black" />
          ) : (
            btnLabel
          )}
        </button>
      </form>
      <Toast
        erroMsg="Something went wrong."
        message={toastMessage}
        show={showToast}
        setShow={setShowToast}
      />
    </>
  );
}
