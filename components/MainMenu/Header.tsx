"use client";

import { memo } from "react";

import { LabelWithIcon } from "@/common";
import useGlobalContext from "@/hooks/useGlobalContext";

type THeaderProps = {
  show: boolean;
};

const Header = ({ show }: THeaderProps) => {
  const {
    globalState: { user },
  } = useGlobalContext();

  const { name, profilePicture } = user;

  return (
    <header className={show ? "visible" : "invisible"}>
      <LabelWithIcon
        className={`gap-3 xs:gap-4 font-bold text-[22px] xs:text-[32px] cursor-default select-none `}
        spacing="gap-3 xs:gap-6"
        padding="pl-4 xs:pl-0"
        icon={profilePicture}
        iconStyles="w-9 h-9 xs:w-[82px] xs:h-[82px] shadow-main rounded-full transition-shadow"
        name={name}
      />
    </header>
  );
};

export default memo(Header);
