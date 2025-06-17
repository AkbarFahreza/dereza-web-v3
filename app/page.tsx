import Image from "next/image";
import TopNav from "@/components/TopNav";
import LeftMenu from "@/components/LeftMenu";
import ProfileSection from "@/components/ProfileSection";
import ScrollHashUpdater from "@/utils/ScrollHashupdater";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 lg:py-8 mt-5 pb-20 gap-16 lg:p-20 font-[family-name:var(--font-geist-sans)] relative">
      <TopNav />
      <div className="p-4 max-w-[300px] hidden lg:block fixed top-28 left-10">
        <LeftMenu />
      </div>
      <div className="p-4 max-w-[290px] hidden lg:block fixed top-28 right-10">
        <ProfileSection />
      </div>
      <div className="lg:grid lg:grid-cols-[270px_3fr_290px] gap-6 min-h-screen min-w-screen px-5 lg:px-10">
        <div className="p-4 "></div>

        <div className="p-2 lg:p-6">
          <ScrollHashUpdater />
          <div
            id="home"
            className="min-h-screen flex flex-col justify-center self-center p-0 -translate-y-32 cursor-pointer"
          >
            <h1 className="text-8xl lg:text-9xl pt-30 font-carattere text-center text-main">
              Welcome
            </h1>
            <div className="relative mx-auto">
              <p className="text-center">Scroll to explore</p>
            </div>
          </div>

          <div id="pricelist" className="min-h-screen  pt-32">
            <h1>Helloooo</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quo ipsa reiciendis iure recusandae vero voluptatibus,
              perferendis quas facilis expedita!
            </h1>
          </div>
          <div id="term-of-service" className="min-h-screen  pt-32">
            <h1>Term of service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quo ipsa reiciendis iure recusandae vero voluptatibus,
              perferendis quas facilis expedita!
            </p>
          </div>
          <div id="portfolio" className="min-h-screen  pt-32">
            <h1>Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quo ipsa reiciendis iure recusandae vero voluptatibus,
              perferendis quas facilis expedita!
            </p>
          </div>
          <div id="waiting-list" className="min-h-screen  pt-32">
            <h1>Waiting List</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quo ipsa reiciendis iure recusandae vero voluptatibus,
              perferendis quas facilis expedita!
            </p>
          </div>
        </div>
        <div className="p-4 "></div>
      </div>
    </div>
  );
}
