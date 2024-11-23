import { create } from "zustand";

interface Movie {
  overview: string;
  poster_path: string;
  title: string;
  popularity: number;
  release_date: string;
}

interface Props {
  movie?: Movie;
  setMovie: (movie: Movie) => void;
}

export const useMovie = create<Props>((set) => ({
  movie: undefined,
  setMovie: (movie: Movie) => set(() => ({ movie })),
}));
