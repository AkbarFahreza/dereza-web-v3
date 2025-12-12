import Link from "next/link";
import React from "react";
import Image from "next/image";

function Partners() {
  return (
    <div>
      <div>
        <p className="relative text-6xl font-carattere text-main before:content-[''] before:absolute before:right-0 before:bottom-1/2 before:-translate-y-1/2 md:before:w-2/5 before:w-1/5 before:h-[2px] before:bg-white">
          Partners
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="https://x.com/yourLunaRein"
          className="px-4 py-2 bg-purple-500 rounded-md flex flex-row justify-left items-center"
        >
          <Image
            src="/avatar-kak-luna.png"
            alt="avatar kak luna"
            width={45}
            height={45}
            className="rounded-full mr-5"
          />
          <div className="">
            <h3 className="text-background font-black">Lunawyn</h3>
            <p className="text-xs">Designer</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Partners;
