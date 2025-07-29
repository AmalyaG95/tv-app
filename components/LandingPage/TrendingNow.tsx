"use client";

import MovieCard from "@/common/MovieCard";
import Slider from "@/common/Slider";
import useScreenSize, { EBreakpoints } from "@/hooks/useScreenSize";

type TrandingNowProps = {
  trendingMovies: TMovie[];
};

const TrendingNow = ({ trendingMovies }: TrandingNowProps) => {
  const screenWidth = useScreenSize();
  const slidesPerView =
    screenWidth > EBreakpoints["2xl"]
      ? 8.2
      : screenWidth > EBreakpoints.lg
      ? 6.2
      : screenWidth > EBreakpoints.xs
      ? 4.4
      : 2.4;

  return (
    <section className="pt-8 pb-3 px-3 xs:px-6">
      <h2 className="text-xl xs:text-[22px] md:text-2xl lg:text-[32px] lg:leading-[38px] font-medium text-white">
        Trending Now
      </h2>

      <Slider
        slidesPerView={slidesPerView}
        spaceBetween={16}
        slides={trendingMovies}
        SlideComponent={MovieCard}
        extractSlideId={({ Id }: { Id: string }) => Id}
      />
    </section>
  );
};

export default TrendingNow;
