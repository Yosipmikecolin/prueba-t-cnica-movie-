import { create } from "zustand";
import { Movie } from "../interfaces";

interface Props {
  movie?: Movie;
  setMovie: (movie: Movie) => void;
}

export const useMovie = create<Props>((set) => ({
  movie: undefined,
  setMovie: (movie: Movie) => set(() => ({ movie })),
}));
