import { Star } from "lucide-react";
import {
  useQueryDebut,
  useQueryNowPlaying,
  useQueryPopular,
  useQueryTopRated,
} from "../../api/queries";
import styles from "./MovieGrid.module.css";
import { Search } from "../../components";
import { useState, useMemo } from "react";

export default function MovieGrid() {
  const [selectedOption, setSelectedOption] = useState("1");

  const { data: top } = useQueryTopRated(1);
  const { data: popular } = useQueryPopular(1);
  const { data: debuts } = useQueryDebut(1);
  const { data: playing } = useQueryNowPlaying(1);

  const movieData = useMemo(() => {
    switch (selectedOption) {
      case "1":
        return top?.results ?? [];
      case "2":
        return popular?.results ?? [];
      case "3":
        return debuts?.results ?? [];
      case "4":
        return playing?.results ?? [];
      default:
        return [];
    }
  }, [selectedOption, top, popular, debuts, playing]);

  return (
    <div className={styles.grid}>
      <div className={styles.siverBar}>
        <Search
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <h2 className={styles.title}>
        {selectedOption === "1" && "Más valoradas"}
        {selectedOption === "2" && "Populares"}
        {selectedOption === "3" && "Estrenos"}
        {selectedOption === "4" && "En cartelera"}
      </h2>
      <div className={styles.movies}>
        {movieData.length ? (
          movieData.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                className={styles.movieImage}
              />
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <div className={styles.movieOverlay}>
                <span>Calificación: {movie.vote_average}</span>
                <span>
                  <Star color="#FFE31A" />
                </span>
              </div>
              <button className={styles.buttonMovie}>Ver detalles</button>
            </div>
          ))
        ) : (
          <h1>Sin películas</h1>
        )}
      </div>
    </div>
  );
}
