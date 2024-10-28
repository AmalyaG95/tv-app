import { LabelWithIcon } from "@/common";
import DelayedVideo from "@/common/DelayedVideo";
import { play } from "@/public/assets/icons";
import { convertMinsToHoursMins } from "@/utils";
import Image from "next/image";

const MainFeaturedVideo = ({
  Category,
  CoverImage,
  Description,
  Duration,
  MpaRating,
  Title,
  ReleaseYear,
  TitleImage,
  VideoUrl,
}: TMovie) => {
  const formattedDuration = convertMinsToHoursMins(+Duration);

  return (
    <section
      className={`relative px-3 xs:px-6 lg:px-3 pt-28 pb-8 lg:pt-[170px] lg:pb-[280px] w-full min-h-[60%] min-h-920:min-h-[700px] min-h-lg:min-h-[806px] lg:min-h-[806px] bg-cover bg-top`}
    >
      <DelayedVideo url={VideoUrl} coverImage={CoverImage} />

      <div className="max-w-[805px] h-full z-20 relative linear-gradient(269.72deg, rgba(0,0,0,0) -1166.37%, rgba(0,0,0,0.6) -1244.39%)">
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
                className="text-blacker font-bold !lg:text-[32px] lg:leading-none"
                showTitle
                iconStyles="w-3 lg:w-5 h-4 lg:h-6"
                spacing="gap-2"
                icon={play}
                name="Play"
              />
            </button>
            <button className="w-40 lg:w-60 bg-btn-gradient rounded-[40px] font-bold text-white py-3 lg:py-6 text-2xl lg:text-[32px]">
              More Info
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainFeaturedVideo;
