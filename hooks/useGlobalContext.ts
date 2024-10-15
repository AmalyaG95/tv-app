"use client";

import { useContext } from "react";

import { GlobalContext } from "@/contexts/globalContext";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === null) {
    throw new Error("useGlobalContext is used outside of its Provider");
  }

  return context;
};

export default useGlobalContext;
