import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Banner() {
  const dataContent = [
    {
      src: "/imgs/sugcon-conference.jpg",
      titleLabel: "The Sitecore",
      titleLabelBottom: " User Group Conference",
      title: "Join us for an unparalleled IT and Website industry experience!",
      desc: "an immersive event meticulously designed for thought leaders, tech enthusiasts, and digital innovators. Our gathering, intricately woven into the fabric of our digital community, serves as a pivotal hub for knowledge exchange, collaborative ideation, and the development of cutting-edge solutions.",
      tag: "#Coming Soon!",
      presented: "(SUGCON PH group)",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[761px]">
        <div className="absolute z-[2] w-full h-full background"></div>
        <Image
          className="absolute z-[1] object-cover"
          src={dataContent[0].src}
          alt={""}
          fill
        />
        <div className="relative z-[3] pt-[100px] px-[50px] pb-[20px] flex flex-col gap-[35px]">
          <div
            className={`flex flex-col gap-[10px] text-[50px] font-bold ${poppins.className}`}
          >
            <p className="bg-[#D91E27] px-[10px] py-[4px] max-w-[337px] w-full">
              {dataContent[0].titleLabel}
            </p>
            <p className="bg-[#D91E27] px-[10px] py-[4px] max-w-[618px] w-full">
              {dataContent[0].titleLabelBottom}
            </p>
          </div>

          <p className="text-[25px] font-bold max-w-[541px] w-full">
            {dataContent[0].title}
          </p>

          <p className="text-[20px] font-medium max-w-[729px] w-full text-justify mb-[53px]">
            {dataContent[0].desc}
          </p>

          <div className="flex justify-between items-end">
            <div
              className={`bg-white px-[10px] py-[7px] text-[#D91E27] text-[45px] ${poppins.className}`}
            >
              {dataContent[0].tag}
            </div>

            <div
              className={`bg-[#D91E27] px-[34px] py-[6px] text-[15px] font-medium`}
            >
              Presented By: {dataContent[0].presented}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
