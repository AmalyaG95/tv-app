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
    <nav className="flex flex-col ml-[34px]">
      {NAV_ITEMS.map((item) => {
        const { name, url } = item;
        const isActive = pathname === url;

        const isActiveStyles = `${isActive ? "bg-slate-blue shadow-main" : ""}`;
        const isOpenStyles = ` ${isOpen ? "rounded-xl" : "rounded-full"}`;

        return (
          <Link
            className={`transition-all ${isOpenStyles} ${isActiveStyles}`}
            key={name}
            href={url as string}
            onClick={handleOpenMenu}
          >
            <LabelWithIcon {...item} showTitle={isOpen} padding="p-5" />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
