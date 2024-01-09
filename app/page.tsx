import {
  getBannerDataContent,
  getEventsDataContent,
  getJoinCommunityDataContent,
  getNavbarDataContent,
  getSugconCommunityDataContent,
  getSugconDataContent,
} from "@/actions/data-content";
import Banner from "@/components/banner";
import Events from "@/components/events";
import JoinCommunity from "@/components/join-community";
import Navbar from "@/components/navbar";
import Sugcon from "@/components/sugcon";
import SugconCommunity from "@/components/sugcon-community";

export default async function Home() {
  // const navbarDataContent = await getNavbarDataContent();
  // const bannerDataContent = await getBannerDataContent();
  // const joinCommunityDataContent = await getJoinCommunityDataContent();
  // const sugconDataContent = await getSugconDataContent();
  // const sugconCommunityDataContent = await getSugconCommunityDataContent();
  // const eventsDataContent = await getEventsDataContent();

  return (
    <main className="flex flex-col items-center justify-center pt-0 pb-[20px] px-[20px] lg:pb-[55px] lg:px-[55px] max-w-[1440px] w-full overflow-hidden">
      {/* <Navbar data={navbarDataContent} />
      <div className="bg-[#D91E27] w-full h-[5px]"></div>
      <Banner data={bannerDataContent} />
      <JoinCommunity data={joinCommunityDataContent} />
      <Sugcon data={sugconDataContent} />
      <SugconCommunity data={sugconCommunityDataContent} />
      <Events data={eventsDataContent} /> */}
    </main>
  );
}
