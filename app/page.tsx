import {
  getBannerDataContent,
  getEventsDataContent,
  getJoinCommunityDataContent,
  getNavbarDataContent,
  getNavigationDataContent,
  getSugconCommunityDataContent,
  getSugconDataContent,
} from "@/actions/data-content";
import Banner from "@/components/banner";
import Events from "@/components/events";
import JoinCommunity from "@/components/join-community";
import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";
import Sugcon from "@/components/sugcon";
import SugconCommunity from "@/components/sugcon-community";

export default async function Home() {
  const navbarDataContent = await getNavbarDataContent();
  const navigationDataContent = await getNavigationDataContent();
  const bannerDataContent = await getBannerDataContent();
  const joinCommunityDataContent = await getJoinCommunityDataContent();
  const sugconDataContent = await getSugconDataContent();
  const sugconCommunityDataContent = await getSugconCommunityDataContent();
  const eventsDataContent = await getEventsDataContent();

  return (
    <>
      <main className="flex flex-col items-center justify-center pt-0 pb-[20px] px-[20px] lg:pb-[55px] lg:px-[55px] max-w-[1920px] w-full overflow-hidden">
        <Navbar
          navigationData={navigationDataContent}
          data={navbarDataContent}
        />
        <div className="bg-[#D91E27] w-full h-[5px] hidden md:flex"></div>
        <Navigation data={navigationDataContent} />
        {/* <div className="bg-[#D91E27] w-full h-[5px]"></div> */}
        <div id="home" className="mt-[91px] md:mt-[0px]"></div>
        <Banner data={bannerDataContent} />
        <JoinCommunity data={joinCommunityDataContent} />
        <div className="bg-[#111314] w-full flex justify-center">
          <Sugcon data={sugconDataContent} />
        </div>
        <SugconCommunity data={sugconCommunityDataContent} />
        <div id="events"></div>
        <Events data={eventsDataContent} />
      </main>
    </>
  );
}
