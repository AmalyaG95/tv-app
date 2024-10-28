"use client";

import { ReactNode } from "react";

import { GlobalContextProvider } from "@/contexts/globalContext";
import { MainMenu } from "./MainMenu";
import { USER } from "@/constants/MainMenu.constant";
import { getItemFromStorage } from "@/utils";

type ClientLayoutProps = {
  Featured: TMovie;
  TrendingNow: TMovie[];
  children: ReactNode;
};

const ClientLayout = ({
  Featured,
  TrendingNow,
  children,
}: ClientLayoutProps) => {
  const trendingMovies = getItemFromStorage("trendingMovies", window);

  return (
    <GlobalContextProvider
      data={{
        globalState: {
          user: USER,
          featuredMovie: Featured,
          trendingMovies: trendingMovies ? trendingMovies : TrendingNow,
        },
      }}
    >
      <div className="flex w-full h-full">
        <MainMenu />
        {children}
      </div>
    </GlobalContextProvider>
  );
};

export default ClientLayout;
