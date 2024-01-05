import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Sugcon() {
  const dataContent = [
    {
      src: "/imgs/sugcon.jpg",
      titleLabel: "WHAT IS #SUGCON?",
      title: "Join us for an unparalleled IT and Website industry experience!",
      desc: "Where the IT and web development community comes alive! Join us for a celebration of knowledge and creativity within the Sitecore Experience Cloud and beyond. Experience a symphony of insights, workshops, and camaraderie that turns learning into a joyful adventure. Unleash your passion and connect with seasoned experts and newcomers alike.",
      tag: "SUGCON is not just an event; it's your playground for coding, design, and endless possibilities. Let the excitement begin!",
    },
  ];

  return (
    <>
      <div className="w-full px-[37px] py-[30px] bg-[#212529] flex justify-between gap-[20px]">
        <div className="max-w-[573px] w-full flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[29px]">
            <p
              className={`px-[9px] py-[7px] text-[45px] bg-[#0A0A0B] max-w-[490px] w-full ${poppins.className}`}
            >
              {dataContent[0].titleLabel}
            </p>
            <p className={`${poppins.className} text-[25px] `}>
              {dataContent[0].title}
            </p>
            <p
              className={`text-[20px] font-medium leading-[157.523%] text-justify`}
            >
              {dataContent[0].desc}
            </p>
          </div>
          <div className="bg-[#757575] rounded-[36px] w-full h-[1px]"></div>
          <div
            className={`bg-[#D91E27] text-[25px] px-[8px] py-[7px] ${poppins.className}`}
          >
            {dataContent[0].tag}
          </div>
        </div>

        <Image
          className="object-cover"
          src={dataContent[0].src}
          alt={""}
          width={646}
          height={594}
        />
      </div>
    </>
  );
}
