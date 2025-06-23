import Notice from "@/components/Notice";
import Image from "next/image";

import React from "react";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function YoutubeChatCSS() {
  const basicIDR = "130K";
  const basicUSD = "25";
  const fullIDR = "230K";
  const fullUSD = "35";
  return (
    <div>
      <div id="basic-package">
        <div className="flex flex-wor justify-between">
          <div className="flex felx-row gap-4">
            <Image
              src="/sparkle-decor.svg"
              width={17}
              height={17}
              alt="sparkle decor"
            />
            <p className="text-base text-main">Basic Package</p>
          </div>
          <div className="flex flex-row md:mr-12 gap-2">
            <p className="text-xs">
              IDR <span className="font-calistoga text-base">{basicIDR} </span>
            </p>
            |
            <p className="text-xs">
              {" "}
              USD <span className="font-calistoga text-base">{basicUSD}</span>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-1 ml-5">
            <div className="flex flex-row gap-4 align-middle">
              <FaCheck color="#45EA69" />
              <p className="text-sm">General Chat</p>
            </div>
            <p className="text-xs ml-8">
              Chat from viewer, Moderator, member, and owner
            </p>
            <div className="flex flex-row gap-4 align-middle mt-4">
              <IoCloseSharp color="#EA4548" className="scale-150" />
              <p className="text-sm text-ghost">Event Chat</p>
            </div>
            <p className="text-xs ml-8 text-ghost">
              Chat from viewer, Moderator, member, and owner
            </p>
          </div>
        </div>
      </div>
      <div id="Full-package" className="mt-8">
        <div className="flex flex-wor justify-between">
          <div className="flex felx-row gap-4">
            <Image
              src="/sparkle-decor.svg"
              width={17}
              height={17}
              alt="sparkle decor"
            />
            <p className="text-base text-main ">Full Package</p>
          </div>
          <div className="flex flex-row md:mr-12 gap-2">
            <p className="text-xs">
              IDR <span className="font-calistoga text-base">{fullIDR} </span>
            </p>
            |
            <p className="text-xs">
              {" "}
              USD <span className="font-calistoga text-base">{fullUSD}</span>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-1 ml-5">
            <div className="flex flex-row gap-4 align-middle items-center">
              <FaCheck color="#45EA69" className="scale-75" />
              <p className="text-sm">General Chat</p>
            </div>
            <p className="text-xs ml-8">
              Chat from viewer, Moderator, member, and owner
            </p>
            <div className="flex flex-row gap-4 align-middle items-center mt-4">
              <FaCheck color="#45EA69" className="scale-75" />
              <p className="text-sm">Event Chat</p>
            </div>
            <p className="text-xs ml-8">
              Chat from viewer, Moderator, member, and owner
            </p>
          </div>
          <Notice
            type="info"
            message="You will get : CSS file and PDF for guide"
          />
        </div>
      </div>
    </div>
  );
}

export default YoutubeChatCSS;
