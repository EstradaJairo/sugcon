import Image from "next/image";
import { Poppins } from "next/font/google";
import { Sugcon } from "@/types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

interface SugconProps {
  data: Sugcon[];
}

export default function Sugcon({ data }: SugconProps) {
  return (
    <>
      <div
        id="about"
        className="w-full  px-[10px] py-[12px] md:px-[37px] md:py-[30px] flex flex-col-reverse  xl:flex-row xl:justify-between gap-[50px]"
      >
        <div className=" w-full flex flex-col gap-[14px]">
          <div className="px-[33px] md:px-[0px]">
            <div className="flex flex-col items-center lg:items-start mb-[14px]">
              <p
                className={` text-[25px] text-center lg:text-start sm:text-[45px] w-full mb-[5px] ${poppins.className}`}
              >
                {data[0].titleLabel}
              </p>
              <p className={` text-[8px] sm:text-[25px]`}>{data[0].title}</p>
              <p
                className={`text-[10px] sm:text-[20px] font-medium leading-[157.523%] text-justify mt-[19px] text-[#FFFFFF99]`}
              >
                {data[0].desc}
              </p>
            </div>
            <div className="bg-[#757575] rounded-[36px] w-full h-[1px]"></div>
          </div>
          <div
            className={`bg-[#D91E27] text-center md:text-start font-bold text-[16px] sm:text-[25px] md:text-[32px] px-[18px] py-[16px] md:px-[8px] md:py-[7px] ${poppins.className}`}
          >
            {data[0].tag}
          </div>
        </div>

        <Image
          className="object-cover self-center xl:self-stretch"
          src={data[0].src}
          alt={""}
          width={646}
          height={594}
        />
      </div>
    </>
  );
}
