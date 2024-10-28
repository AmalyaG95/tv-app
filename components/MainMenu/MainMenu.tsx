"use client";

import { useState } from "react";

import Image from "next/image";

import { menu } from "@/public/assets/icons";
import { Header, Navbar } from "@/components/MainMenu";
import ActionButtons from "./ActionButtons";
import useCloseElement from "@/hooks/useCloseElement";
import useScreenSize, { EBreakpoints } from "@/hooks/useScreenSize";

const MainMenu = () => {
  const screenWith = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  useCloseElement(isOpen, setIsOpen, ".wrapper");

  const isOpenStyles = `${
    isOpen
      ? "w-full px-3 xs:px-[38px] pt-10 xs:pt-[60px] bg-black opacity-90 bg-no-repeat bg-menu-gradient"
      : ""
  }`;
  console.log(isOpen, "isOpen");

  return (
    <>
      {!isOpen && (
        <Image
          className={`absolute top-3 xs:top-6 left-3 xs:left-6 z-20 lg:hidden`}
          src={menu}
          width={30}
          height={31}
          alt="menu"
          priority
          onClick={() => setIsOpen(true)}
        />
      )}

      {(isOpen || screenWith >= EBreakpoints.lg) && (
        <menu
          className={`fixed left-0 top-0 overflow-y-auto h-screen pt-20 xs:pt-[200px] pb-10 pr-8 xs:pb-[65px] z-50 transition-all duration-500 ease-out ${isOpenStyles}`}
        >
          <div className="wrapper flex flex-col gap-4 xs:gap-10 max-w-56 xs:max-w-sm h-full text-white bg-black">
            {isOpen && <Header />}

            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            {isOpen && (
              <footer className="mt-auto pl-6 xs:pl-11">
                <ActionButtons />
              </footer>
            )}
          </div>
        </menu>
      )}
    </>
  );
};

export default MainMenu;
