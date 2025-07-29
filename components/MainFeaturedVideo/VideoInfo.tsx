import Image from "next/image";
import LabelWithIcon from "@/common/LabelWithIcon";
import { play } from "@/public/assets/icons";
import useGlobalContext from "@/hooks/useGlobalContext";
import convertMinsToHoursMins from "@/utils/convertMinsToHoursMins";
import useVideoContext from "@/hooks/useVideoContext";

const VideoInfo = () => {
  const {
    globalState: { featuredMovie },
  } = useGlobalContext();
  const { isVideoPlaying } = useVideoContext();

  if (!featuredMovie) return null;

  const {
    Category,
    TitleImage,
    Title,
    ReleaseYear,
    MpaRating,
    Duration,
    Description,
  } = featuredMovie;

  const formattedDuration = convertMinsToHoursMins(+Duration);

  const bgGradientStyles = isVideoPlaying
    ? "bg-[linear-gradient(269.72deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.9)_100%)]"
    : "";

  return (
    <div
      className={`max-w-[805px] h-full xs:p-7 lg:p-3 z-20 relative ${bgGradientStyles}`}
    >
      <h3 className="text-grey text-2xl font-bold">{Category}</h3>
      <article className="flex flex-col gap-2 lg:gap-5">
        <Image
          className="xs:w-[340px] xs:h-8 md:w-[595px] md:h-14 lg:w-[680px] lg:h-16"
          alt={`${Title}Image`}
          src={TitleImage}
          width={200}
          height={80}
          priority
        />
        <p className="flex gap-3 text-2xl md:text-[28px] lg:text-3xl text-white">
          <span>{ReleaseYear} </span>
          <span>{MpaRating} </span>
          <span className="tracking-tighter">{formattedDuration} </span>
        </p>
        <p className="text-xl xs:text-[22px] md:text-2xl lg:text-[32px] text-white">
          {Description}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-4 mt-8 md:mt-0">
          <button className="flex justify-center w-40 lg:w-60 bg-white py-3 lg:py-6 rounded-3xl lg:rounded-[40px]">
            <LabelWithIcon
              className="text-blacker font-bold text-2xl lg:text-[32px] h-8 lg:leading-10"
              showTitle
              iconStyles="w-3 lg:w-5 h-4 lg:h-6"
              spacing="gap-2"
              icon={play}
              name="Play"
            />
          </button>
          <button className="w-40 lg:w-60 bg-btn-gradient rounded-[40px] font-bold text-white py-3 lg:py-6 text-2xl h-14 leading-10 lg:text-[32px] lg:h-20">
            More Info
          </button>
        </div>
      </article>
    </div>
  );
};

export default VideoInfo;
