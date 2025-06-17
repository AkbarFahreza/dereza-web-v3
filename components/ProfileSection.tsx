import React from "react";
import Image from "next/image";

function ProfileSection() {
  return (
    <div className="flex flex-col jsutify-center align-bottom">
      <Image
        className="mx-auto"
        src="/profile-picture.png"
        width={210}
        height={234}
        alt="profile picture"
      />
      <p className="text-center txet-base mt-10">
        Bring your stream to life with personalized YouTube chat overlays and
        Trakteer goal widgets — beautifully designed and custom-coded just for
        you.
      </p>
      <div className="flex flex-row gap-x-4 justify-center mt-5">
        <Image src="/x-icon.svg" width={19} height={17} alt="twitter icon" />
        <Image src="/kofi-icon.svg" width={25} height={16} alt="ko-fi icon" />
        <Image
          src="/trakteer-icon.svg"
          width={16}
          height={27}
          alt="trakteer icon"
        />
      </div>
    </div>
  );
}

export default ProfileSection;
