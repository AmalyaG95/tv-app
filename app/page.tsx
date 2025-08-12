"use client"

import { useState } from "react";

import useGlobalContext from "@/hooks/useGlobalContext";
// import MainFeaturedVideo from "/MainFeaturedVideo/MainFeaturedVideo";
import { VideoContextProvider } from "@/contexts/videoContext";
import useGetItemFromStorage from "@/hooks/useGetItemFromStorage";
import { MainFeaturedVideo, TrendingNow } from "@/components";
// import TrendingNow from "./TrendingNow";

const Home = () => {
  const {
    globalState: { featuredMovie, trendingMovies },
  } = useGlobalContext();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useGetItemFromStorage("trendingMovies");

  return (
    <VideoContextProvider data={{ isVideoPlaying, setIsVideoPlaying }}>
      <main className="w-full h-full lg:pl-[130px] max-w-[1920px]">
        {!!featuredMovie && <MainFeaturedVideo />}
        {!!trendingMovies && <TrendingNow trendingMovies={trendingMovies} />}
      </main>
    </VideoContextProvider>
  );
};

export default Home;
