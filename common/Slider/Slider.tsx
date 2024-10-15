"use client";

import { ComponentProps } from "react";

import { A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperSlideProps } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const DEFAULT_EXTRACT_SLIDE_ID = (slide: { id: number | string }) => slide?.id;

type SwiperProps = ComponentProps<typeof Swiper>;

type SliderProps = {
  slides: any;
  spaceBetween?: number;
  SlideComponent: React.FunctionComponent<any | SwiperSlideProps>;
  extractSlideId?: (slide: any) => number | string;
  withFade?: boolean;
  withAutoplay?: boolean;
  withAccessibility?: boolean;
  slidesPerView?: number | "auto";
  sliderPrefix?: string;
  swiperProps?: SwiperProps;
};

const Slider = ({
  slides,
  spaceBetween,
  SlideComponent,
  extractSlideId = DEFAULT_EXTRACT_SLIDE_ID,
  withFade,
  withAutoplay,
  withAccessibility,
  slidesPerView = 1,
  swiperProps,
}: SliderProps) => {
  if (!slides?.length) return null;

  return (
    <div className="w-full max-w-full relative">
      <Swiper
        modules={[
          ...(withFade ? [EffectFade] : []),
          ...(withAutoplay ? [Autoplay] : []),
          ...(withAccessibility ? [A11y] : []),
        ]}
        {...(withFade && { effect: "fade" })}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        watchSlidesProgress
        {...(withAutoplay && {
          autoplay: {
            delay: 8000,
          },
        })}
        initialSlide={0}
        {...swiperProps}
      >
        {slides.map((slide: any, idx: number | string) => (
          <SwiperSlide key={extractSlideId(slide) || idx}>
            <SlideComponent {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
