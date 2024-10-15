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
        className="gap-4 text-[32px]"
        spacing="gap-5"
        padding="pl-6"
        icon={profilePicture}
        iconStyles="shadow-main rounded-full transition-shadow"
        name={name}
      />
    </header>
  );
};

export default Header;
