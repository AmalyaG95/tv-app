"use client";

import { ReactNode, useMemo } from "react";

import { VideoContext, VideoSate } from "./VideoContext";

export type VideoContextProviderProps = {
  data: VideoSate | null;
  children: ReactNode;
};

const VideoContextProvider = ({
  data,
  children,
}: VideoContextProviderProps) => {
  const contextValue = useMemo(() => data, [data]);

  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContextProvider;
