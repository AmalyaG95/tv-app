"use client";

import { LabelWithIcon } from "@/common";
import useGlobalContext from "@/hooks/useGlobalContext";

const Header = () => {
  const {
    globalState: { user },
  } = useGlobalContext();

  const { name, profilePicture } = user;

  return (
    <header>
      <LabelWithIcon
        className="gap-3 lg:gap-4 !text-2xl !lg:text-[32px]"
        spacing="gap-3 lg:gap-5"
        padding="pl-5 lg:pl-6"
        icon={profilePicture}
        iconStyles="w-9 h-9 lg:w-[82px] lg:h-[82px] shadow-main rounded-full transition-shadow"
        name={name}
      />
    </header>
  );
};

export default Header;
