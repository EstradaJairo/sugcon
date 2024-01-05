import Banner from "@/components/banner";
import JoinCommunity from "@/components/join-community";
import Navbar from "@/components/navbar";
import Sugcon from "@/components/sugcon";
import SugconCommunity from "@/components/sugcon-community";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-[20px] lg:p-[55px] max-w-[1440px] w-full">
      <Navbar />
      <div className="bg-[#D91E27] w-full h-[5px]"></div>
      <Banner />
      <JoinCommunity />
      <Sugcon />
      <SugconCommunity />
    </main>
  );
}
