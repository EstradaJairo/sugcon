import Image from "next/image";
import { Poppins } from "next/font/google";
import { Sugcon } from "@/types";
import { useState } from "react";

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
      }

      if (!response.ok) {
        console.log("Something went wrong");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex gap-[10px] items-center justify-center"
      >
        <input
          placeholder="First Name"
          className={`${inputCustomClassName} ${
            errors.firstName ? "border border-red-700" : "border border-white"
          } `}
          autoComplete="off"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          placeholder="Last Name"
          className={`${inputCustomClassName} ${
            errors.lastName ? "border border-red-700" : "border border-white"
          } `}
          autoComplete="off"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          placeholder="Email Address"
          className={`${inputCustomClassName} ${
            errors.emailAddress
              ? "border border-red-700"
              : "border border-white"
          } `}
          autoComplete="off"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={handleSendEmail}
          className={btnCustomClassName}
        >
          {btnLabel}
        </button>
      </form>
    </>
  );
}
