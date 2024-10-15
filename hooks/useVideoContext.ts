"use client";

import { useContext } from "react";

import { VideoContext } from "@/contexts/videoContext";

const useVideoContext = () => {
  const context = useContext(VideoContext);

  if (context === null) {
    throw new Error("useGlobalContext is used outside of its Provider");
  }

  return context;
};

export default useVideoContext;
