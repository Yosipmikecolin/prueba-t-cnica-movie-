import { useQuery } from "@tanstack/react-query";
import {
  getMoviesDebut,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  searchMovies,
} from "./request";

export const useQueryTopRated = (currentPage: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["movies_top_rated", currentPage],
    queryFn: () => getMoviesTopRated(currentPage),
    refetchOnWindowFocus: false,
    enabled: currentPage > 0 && enabled,
  });
};

export const useQueryPopular = (currentPage: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["movies_popular", currentPage],
    queryFn: () => getMoviesPopular(currentPage),
    refetchOnWindowFocus: false,
    enabled: currentPage > 0 && enabled,
  });
};

export const useQueryDebut = (currentPage: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["movies_debut", currentPage],
    queryFn: () => getMoviesDebut(currentPage),
    refetchOnWindowFocus: false,
    enabled: currentPage > 0 && enabled,
  });
};

export const useQueryNowPlaying = (currentPage: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["movies_now_playing", currentPage],
    queryFn: () => getMoviesNowPlaying(currentPage),
    refetchOnWindowFocus: false,
    enabled: currentPage > 0 && enabled,
  });
};

export const useQuerySearchMovies = (
  search: string,
  currentPage: number,
  enabled: boolean
) => {
  return useQuery({
    queryKey: ["search_movies", currentPage],
    queryFn: () => searchMovies(search, currentPage),
    refetchOnWindowFocus: false,
    enabled: currentPage > 0 && enabled,
  });
};
