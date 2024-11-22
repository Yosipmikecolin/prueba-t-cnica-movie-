import { useQuery } from "@tanstack/react-query";
import { getMoviesTopRated } from "./request";

export const useQueryTopRated = (currentPage: number) => {
  return useQuery({
    queryKey: ["movies_top_rated", currentPage],
    queryFn: () => getMoviesTopRated(currentPage),
    refetchOnWindowFocus: false,
    enabled: currentPage > 0,
  });
};
