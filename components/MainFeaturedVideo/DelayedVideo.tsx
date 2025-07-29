"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import useVideoContext from "@/hooks/useVideoContext";
import useGlobalContext from "@/hooks/useGlobalContext";

const DelayedVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {
    globalState: { featuredMovie },
  } = useGlobalContext();
  const { isVideoPlaying } = useVideoContext();

  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;

    if (isVideoPlaying) {
      video.play().catch(() => {
        console.log("No Movie Intro");
      });
    } else {
      video.pause();
    }
  }, [isVideoPlaying]);

  if (!featuredMovie) return null;

  const { CoverImage, VideoUrl } = featuredMovie;

  return (
    <>
      {!isVideoPlaying || VideoUrl === undefined ? (
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-menu-gradient bg-right-top w-full h-full z-10" />
          <Image objectFit="cover" fill alt="cover" src={CoverImage} priority />
        </>
      ) : (
        isVideoPlaying && (
          <video
            ref={videoRef}
            muted
            loop
            className="absolute top-1/2 left-1/2 min-w-full min-h-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          >
            <source src={VideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}
    </>
  );
};

export default DelayedVideo;
