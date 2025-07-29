import DelayedVideo from "./DelayedVideo";
import VideoInfo from "./VideoInfo";

const MainFeaturedVideo = () => (
  <section className="relative px-3 xs:px-0 pt-28 pb-8 lg:pt-[170px] lg:pb-[280px] w-full min-h-[60%] min-h-920:min-h-[700px] min-h-lg:min-h-[806px] lg:min-h-[806px] bg-cover bg-top bg-black opacity-90 bg-no-repeat bg-menu-gradient">
    <DelayedVideo />
    <VideoInfo />
  </section>
);

export default MainFeaturedVideo;
