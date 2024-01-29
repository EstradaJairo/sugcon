import {
  getNavbarDataContent,
  getNavigationDataContent,
} from "@/actions/data-content";
import FormContainer from "@/components/form-container";
import Navbar from "@/components/navbar";

export default async function Sugcon() {
  const navbarDataContent = await getNavbarDataContent();
  const navigationDataContent = await getNavigationDataContent();

  return (
    <>
      <main className="flex flex-col items-center justify-center pt-0 pb-[20px] px-[20px] lg:pb-[55px] lg:px-[55px] max-w-[1920px] w-full overflow-hidden">
        <Navbar
          navigationData={navigationDataContent}
          data={navbarDataContent}
        />
        <div className="bg-[#D91E27] w-full h-[5px] hidden md:flex"></div>
        <div className="h-full w-full">
          <FormContainer />
        </div>
      </main>
    </>
  );
}
