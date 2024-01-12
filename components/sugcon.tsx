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
        className="w-full px-[37px] py-[30px] bg-[#212529] flex flex-col  xl:flex-row xl:justify-between gap-[20px]"
      >
        <div className="xl:max-w-[573px] w-full flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[29px]">
            <p
              className={`px-[9px] py-[7px] text-[25px] text-center sm:text-[45px] bg-[#0A0A0B] max-w-[490px] w-full ${poppins.className}`}
            >
              {data[0].titleLabel}
            </p>
            <p className={`${poppins.className} text-[18px] sm:text-[25px] `}>
              {data[0].title}
            </p>
            <p
              className={`text-[16px] sm:text-[20px] font-medium leading-[157.523%] text-justify`}
            >
              {data[0].desc}
            </p>
          </div>
          <div className="bg-[#757575] rounded-[36px] w-full h-[1px]"></div>
          <div
            className={`bg-[#D91E27] text-[18px] sm:text-[25px] px-[8px] py-[7px] ${poppins.className}`}
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
