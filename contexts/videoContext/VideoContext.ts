"use client";

import { createContext } from "react";

export type VideoSate = {
  isVideoPlaying: boolean;
  setIsVideoPlaying: TSetBoolean;
};

export const VideoContext = createContext<VideoSate | null>(null);
VideoContext.displayName = "VideoContext";
