import Image from "next/image";
import TopNav from "@/components/TopNav";
import LeftMenu from "@/components/LeftMenu";
import ProfileSection from "@/components/ProfileSection";
import ScrollHashUpdater from "@/utils/ScrollHashupdater";
import PriceList from "@/components/sections/PriceList";
import SpinningDecor from "@/components/SpinningDecor";
import TermOfService from "@/components/sections/TermOfService";
import WaitingList from "@/components/sections/WaitingList";
import Portfolio from "@/components/sections/Portfolio";
import Featuring from "@/components/sections/Featuring";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 md:py-8 mt-5 pb-20 gap-16 md:p-20 font-[family-name:var(--font-geist-sans)] relative">
      <SpinningDecor />
      <Image
        src="/large-sparkle.svg"
        width={649}
        height={611}
        alt="large sparkle decor"
        className=" fixed -bottom-[140px] -right-[120px]  opacity-5 rotate-[30deg]"
      />
      <TopNav />
      <div className="p-4 max-w-[300px] hidden md:block fixed top-28 left-10">
        <LeftMenu />
      </div>
      <div className="p-4 max-w-[290px] hidden md:block fixed top-28 right-10">
        <ProfileSection />
      </div>
      <div className="md:grid md:grid-cols-[270px_3fr_290px] gap-6 min-h-screen min-w-screen px-5 md:px-10">
        <div className="p-4 "></div>

        <div className="p-2 md:p-6">
          <ScrollHashUpdater />
          <div
            id="home"
            className="min-h-screen flex flex-col justify-center self-center p-0 -translate-y-32 cursor-pointer"
          >
            <h1 className="text-8xl md:text-9xl pt-30 font-carattere text-center text-main">
              Welcome
            </h1>
            <div className="relative mx-auto">
              <p className="text-center">Scroll to explore</p>
            </div>
          </div>

          <div id="pricelist" className="min-h-screen  pt-28">
            <PriceList />
          </div>
          <div id="term-of-service" className="min-h-screen  pt-28">
            <TermOfService />
          </div>
          <div id="portfolio" className="min-h-screen  pt-28">
            <Portfolio />
          </div>
          <div id="waiting-list" className="min-h-screen  pt-28">
            <WaitingList />
          </div>
          <div id="projects" className="min-h-screen  pt-28">
            <Projects />
          </div>
          <div id="featuring" className="min-h-screen  pt-28">
            <Featuring />
          </div>
        </div>
        <div className="p-4 "></div>
      </div>
    </div>
  );
}
