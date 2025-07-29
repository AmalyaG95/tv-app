"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

import useGlobalContext from "@/hooks/useGlobalContext";
import MainFeaturedVideo from "../MainFeaturedVideo/MainFeaturedVideo";
import { VideoContextProvider } from "@/contexts/videoContext";
import useGetItemFromStorage from "@/hooks/useGetItemFromStorage";

const TrendingNow = dynamic(() => import("./TrendingNow"));

const LandingPage = () => {
  const {
    globalState: { featuredMovie, trendingMovies },
  } = useGlobalContext();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useGetItemFromStorage("trendingMovies");

  return (
    <VideoContextProvider data={{ isVideoPlaying, setIsVideoPlaying }}>
      {!!featuredMovie && <MainFeaturedVideo />}
      {!!trendingMovies && <TrendingNow trendingMovies={trendingMovies} />}
    </VideoContextProvider>
  );
};

export default LandingPage;
