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
      className={`relative pt-[170px] pb-[280px]  w-full h-full max-h-[806px] bg-cover bg-top`}
    >
      <DelayedVideo url={VideoUrl} coverImage={CoverImage} />

      <div className="max-w-[805px] z-20 relative">
        <h3 className="text-grey text-2xl font-bold">{Category}</h3>
        <article className="flex flex-col gap-5">
          <Image
            alt={`${Title}Image`}
            src={TitleImage}
            width={680}
            height={80}
            priority
          />
          <p className="flex gap-3 text-3xl text-white">
            <span>{ReleaseYear} </span>
            <span>{MpaRating} </span>
            <span className="tracking-tighter">{formattedDuration} </span>
          </p>
          <desc className="text-[32px] text-white">{Description}</desc>
          <div className="flex items-center gap-4">
            <button className="flex justify-center w-60 bg-white py-6 rounded-[40px]">
              <LabelWithIcon
                showTitle
                className="!text-[32px] font-bold !text-blacker"
                spacing="gap-2"
                icon={play}
                name="Play"
              />
            </button>
            <button className="w-60 bg-btn-gradient rounded-[40px] font-bold text-white py-6 text-[32px]">
              More Info
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainFeaturedVideo;
