"use client";

import { useState } from "react";

import Image from "next/image";

import { menu } from "@/public/assets/icons";
import { Header, Navbar } from "@/components/MainMenu";
import ActionButtons from "./ActionButtons";
import useCloseElement from "@/hooks/useCloseElement";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  useCloseElement(isOpen, setIsOpen, ".wrapper");

  const isOpenStyles = `${
    isOpen
      ? "!flex w-full px-3 lg:px-[38px] pt-10 lg:pt-[60px] bg-black opacity-90 bg-no-repeat bg-menu-gradient"
      : ""
  }`;

  return (
    <>
      {!isOpen && (
        <Image
          className={`absolute top-3 left-3 z-20 lg:hidden`}
          src={menu}
          width={30}
          height={31}
          alt="menu"
          priority
          onClick={() => setIsOpen(true)}
        />
      )}

      {
        <menu
          className={`fixed left-0 top-0 overflow-y-auto h-screen pt-20 lg:pt-[200px] pb-10 pr-8 lg:pb-[65px] z-50 transition-all duration-500 ease-out ${isOpenStyles} !lg:block`}
        >
          <div className="wrapper flex flex-col gap-4 lg:gap-10 max-w-56 lg:max-w-sm h-full bg-black">
            {isOpen && <Header />}

            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            {isOpen && (
              <footer className="mt-auto pl-6 lg:pl-11">
                <ActionButtons />
              </footer>
            )}
          </div>
        </menu>
      }
    </>
  );
};

export default MainMenu;
