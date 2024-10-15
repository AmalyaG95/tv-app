"use client";

import { createContext } from "react";

export type State = {
  user: TUser;
  featuredMovie?: TMovie;
  trendingMovies: TMovie[];
};

export type TData = {
  globalState: State;
  setGlobalState?: TSetGlobalState;
};

export const GlobalContext = createContext<TData | null>(null);
GlobalContext.displayName = "GlobalContext";
