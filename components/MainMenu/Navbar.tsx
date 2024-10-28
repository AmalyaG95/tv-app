"use client";

import LabelWithIcon from "@/common/LabelWithIcon";
import { NAV_ITEMS } from "@/constants/MainMenu.constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TNavbarProps = {
  isOpen: boolean;
  setIsOpen: TSetBoolean;
};

const Navbar = ({ isOpen, setIsOpen }: TNavbarProps) => {
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex flex-col ml-3 xs:ml-[34px]">
      {NAV_ITEMS.map((item) => {
        const { name, url } = item;
        const isActive = pathname === url;

        const isActiveStyles = `${isActive ? "bg-slate-blue shadow-main" : ""}`;
        const isOpenStyles = ` ${isOpen ? "rounded-xl" : "rounded-full"}`;

        return (
          <Link
            className={`transition-all ${isOpenStyles} p- ${isActiveStyles}`}
            key={name}
            href={url as string}
            onClick={handleOpenMenu}
          >
            <LabelWithIcon
              className="text-2xl xs:text-[36px] leading-6 xs:leading-[40px] text-white"
              spacing="gap-6 xs:gap-[50px]"
              {...item}
              showTitle={isOpen}
              padding="p-3 xs:p-5"
              iconStyles="w-5 xs:w-7 h-5 lg-:h-7"
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
