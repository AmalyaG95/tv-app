import { State } from "@/contexts/globalContext/GlobalContext";
import useGlobalContext from "@/hooks/useGlobalContext";
import useVideoContext from "@/hooks/useVideoContext";
import sortByDate from "@/utils/sortByDate";
import Image from "next/image";

const MovieCard = (props: TMovie) => {
  const { CoverImage } = props;
  const { setIsVideoPlaying } = useVideoContext();
  const {
    globalState: { trendingMovies, featuredMovie },
    setGlobalState,
  } = useGlobalContext();

  const handleSetFeaturedMovie = () => {
    const trendingMoviesCopy = [...trendingMovies];
    const seenMovie = { ...props, Date: new Date().toLocaleString() };
    const seenMovieIndex =
      trendingMovies?.findIndex(({ Id }) => Id === seenMovie.Id) || -1;
    trendingMoviesCopy[seenMovieIndex] = seenMovie;

    sessionStorage.setItem(
      "trendingMovies",
      JSON.stringify(sortByDate(trendingMoviesCopy))
    );

    setGlobalState((prevState: State) => ({
      ...prevState,
      featuredMovie: props,
    }));

    setIsVideoPlaying(false);
    setTimeout(() => {
      setIsVideoPlaying(true);
    }, 2000);
  };

  return (
    <button onClick={handleSetFeaturedMovie}>
      <Image width={200} height={296} alt="" src={CoverImage} />
    </button>
  );
};

export default MovieCard;
