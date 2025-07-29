"use client";

import LabelWithIcon from "@/common/LabelWithIcon";
import { NAV_ITEMS } from "@/constants/MainMenu.constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TNavbarProps = {
  isOpen: boolean;
  handleOpenMenu: () => void;
};

const Navbar = ({ isOpen, handleOpenMenu }: TNavbarProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-col ml-3 xs:ml-0`}
    >
      {NAV_ITEMS.map((item) => {
        const { name, url } = item;
        const isActive = pathname === url;

        const isActiveStyles = `${isActive ? "bg-slate-blue shadow-main" : ""}`;
        const isOpenStyles = ` ${isOpen ? "rounded-xl" : "rounded-full"}`;

        return (
          <Link
            className={`${isOpenStyles} ${isActiveStyles}`}
            key={name}
            href={url as string}
            onClick={handleOpenMenu}
          >
            <LabelWithIcon
              className={`h-6 md:h-7 text-2xl xs:text-[36px] xs:leading-[40px] text-white hover:font-semibold ${
                isActive ? "font-semibold" : ""
              }`}
              spacing="gap-6 xs:gap-[50px]"
              {...item}
              showTitle={isOpen}
              padding="p-3 xs:p-5"
              iconStyles="w-6 md:w-7 h-6 md:h-7"
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
