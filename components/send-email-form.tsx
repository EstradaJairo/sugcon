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

export default function SendEmailForm({
  inputCustomClassName,
  btnLabel,
  btnCustomClassName,
}: SendEmailFormProps) {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
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
      firstName: false,
      lastName: false,
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
      firstName: String(e.target.firstName.value),
      lastName: String(e.target.lastName.value),
      emailAddress: String(e.target.emailAddress.value),
    };

    if (
      data.firstName != "" &&
      data.lastName != "" &&
      data.emailAddress != ""
    ) {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        formData.emailAddress = "";
        formData.firstName = "";
        formData.lastName = "";
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
        className="flex w-full flex-col lg:flex-row gap-[20px] items-start justify-center"
      >
        <div className="flex w-full lg:w-fit flex-col gap-[5px] h-[82px]">
          <input
            type="text"
            placeholder="First Name"
            className={`${inputCustomClassName} ${
              errors.firstName ? "border border-red-700" : "border border-white"
            }`}
            autoComplete="off"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <label className="text-[10px] text-[#FF5050]" htmlFor="firstName">
              Please enter your first name.
            </label>
          )}
        </div>

        <div className="flex w-full lg:w-fit flex-col gap-[5px] h-[82px]">
          <input
            type="text"
            placeholder="Last Name"
            className={`${inputCustomClassName} ${
              errors.lastName ? "border border-red-700" : "border border-white"
            }`}
            autoComplete="off"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <label className="text-[10px] text-[#FF5050]" htmlFor="lastName">
              Please enter your last name.
            </label>
          )}
        </div>

        <div className="flex w-full lg:w-fit flex-col gap-[5px] h-[82px]">
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

        <button
          type="submit"
          onClick={handleSendEmail}
          className={btnCustomClassName}
        >
          {isLoading ? (
            <Loader className="animate-spin h-[20px] w-[20px]" />
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
