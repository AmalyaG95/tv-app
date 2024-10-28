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
        className="gap-3 xs:gap-4 font-bold  text-[22px] xs:text-[32px]"
        spacing="gap-3 xs:gap-6"
        padding="pl-5 xs:pl-6"
        icon={profilePicture}
        iconStyles="w-9 h-9 xs:w-[82px] xs:h-[82px] shadow-main rounded-full transition-shadow"
        name={name}
      />
    </header>
  );
};

export default Header;
