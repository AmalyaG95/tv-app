"use client";

import MovieCard from "@/common/MovieCard";
import Slider from "@/common/Slider";

type TrandingNowProps = {
  trendingMovies: TMovie[];
};

const TrendingNow = ({ trendingMovies }: TrandingNowProps) => (
  <>
    <h2 className="text-[32px] font-medium text-white">Trending Now</h2>

    <Slider
      slidesPerView={8}
      spaceBetween={16}
      slides={trendingMovies}
      SlideComponent={MovieCard}
      extractSlideId={({ Id }: { Id: string }) => Id}
    />
  </>
);

export default TrendingNow;
