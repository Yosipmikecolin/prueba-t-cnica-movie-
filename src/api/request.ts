import { MoviesTopRated } from "../interfaces";
import { axiosConfig, axiosConfigSearch } from "./config";

export const getMoviesTopRated = async (page: number) => {
  const result = (
    await axiosConfig.get<MoviesTopRated>(
      `/top_rated?language=es-ES&page=${page}`
    )
  ).data;
  return result;
};

export const getMoviesPopular = async (page: number) => {
  const result = (
    await axiosConfig.get<MoviesTopRated>(
      `/popular?language=es-ES&page=${page}`
    )
  ).data;
  return result;
};

export const getMoviesDebut = async (page: number) => {
  const result = (
    await axiosConfig.get<MoviesTopRated>(
      `/upcoming?language=es-ES&page=${page}`
    )
  ).data;
  return result;
};

export const getMoviesNowPlaying = async (page: number) => {
  const result = (
    await axiosConfig.get<MoviesTopRated>(
      `/now_playing?language=es-ES&page=${page}`
    )
  ).data;
  return result;
};

export const searchMovies = async (search: string, page: number) => {
  const result = (
    await axiosConfigSearch.get<MoviesTopRated>(
      `language=es-ES&query=${search}&page=${page}`
    )
  ).data;
  return result;
};
