"use client";

import { useEffect, useRef } from "react";

import useVideoContext from "@/hooks/useVideoContext";
import Image from "next/image";

type DelayedVideoProps = {
  url?: string;
  coverImage: string;
};

const DelayedVideo = ({ url, coverImage }: DelayedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isVideoPlaying } = useVideoContext();

  useEffect(() => {
    if (isVideoPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoPlaying]);

  return (
    <>
      {!isVideoPlaying || url === undefined ? (
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-menu-gradient bg-right-top w-full h-full z-10" />
          <Image objectFit="cover" fill alt="cover" src={coverImage} priority />
        </>
      ) : (
        isVideoPlaying && (
          <video
            ref={videoRef}
            muted
            loop
            className="absolute top-1/2 left-1/2 min-w-full min-h-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}
    </>
  );
};

export default DelayedVideo;
