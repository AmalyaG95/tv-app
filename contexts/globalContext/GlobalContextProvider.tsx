"use client";

import { ReactNode, useMemo, useState } from "react";

import { GlobalContext, State, TData } from "./GlobalContext";
import { USER } from "@/constants/MainMenu.constant";

export type GlobalContextProviderProps = {
  data: TData;
  children: ReactNode;
};

const initialState: State = {
  user: USER,
  trendingMovies: [],
};

const GlobalContextProvider = ({
  data,
  children,
}: GlobalContextProviderProps) => {
  const [globalState, setGlobalState] = useState<State>({
    ...initialState,
    user: data?.globalState?.user,
    featuredMovie: data?.globalState?.featuredMovie,
    trendingMovies: data?.globalState?.trendingMovies,
  });
  const contextValue = useMemo(
    () => ({ globalState, setGlobalState }),
    [globalState, setGlobalState]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
