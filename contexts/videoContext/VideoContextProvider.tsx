"use client";

import { ReactNode } from "react";

import { VideoContext, VideoSate } from "./VideoContext";

export type VideoContextProviderProps = {
  data: VideoSate | null;
  children: ReactNode;
};

const VideoContextProvider = ({
  data,
  children,
}: VideoContextProviderProps) => (
  <VideoContext.Provider value={data}>{children}</VideoContext.Provider>
);

export default VideoContextProvider;
