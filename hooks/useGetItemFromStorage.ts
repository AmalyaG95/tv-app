import { useEffect } from "react";

import { getItemFromStorage } from "@/utils";
import useGlobalContext from "./useGlobalContext";
import { State } from "@/contexts/globalContext/GlobalContext";

const useGetItemFromStorage = (itemName: string) => {
  const { setGlobalState } = useGlobalContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = getItemFromStorage(itemName, window);

      if (!!data)
        setGlobalState((prevState: State) => ({
          ...prevState,
          featuredMovie: data[0],
          trendingMovies: data,
        }));
    }
  }, []);
};

export default useGetItemFromStorage;
