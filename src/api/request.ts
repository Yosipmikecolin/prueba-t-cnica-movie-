import { MoviesTopRated } from "../interfaces";
import { axiosConfig } from "./config";

export const getMoviesTopRated = async (page: number) => {
  const result = (
    await axiosConfig.get<MoviesTopRated>(
      `/top_rated?language=es-ES&page=${page}`
    )
  ).data;
  return result;
};
