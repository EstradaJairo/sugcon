import Image from "next/image";

export default function Navbar() {
  const dataContent = [
    {
      src: "/svgs/sitecore.svg",
      width: 207,
      height: 44,
    },
    {
      src: "/imgs/jairosoft-logo.png",
      width: 138,
      height: 43,
    },
    {
      src: "/svgs/sugcon.svg",
      width: 48,
      height: 73,
    },
  ];

  return (
    <>
      <div className="bg-[#212529] w-full h-[85px] lg:h-[135px] p-[20px] lg:p-[40px] flex items-center justify-between">
        <p className="text-[18px] lg:text-[30px] tracking-[3px] lg:tracking-[6px] font-bold">
          SUG<span className="text-[#D91E27]">CON</span> PH
        </p>
        <div className="flex items-center gap-[25px]">
          {dataContent.map((src, index) => (
            <div key={index}>
              <Image src={src} alt={""} width={src.width} height={src.height} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
