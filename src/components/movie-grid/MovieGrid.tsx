import { Star } from "lucide-react";
import {
  useQueryDebut,
  useQueryNowPlaying,
  useQueryPopular,
  useQueryTopRated,
} from "../../api/queries";
import styles from "./MovieGrid.module.css";
import { Search } from "../../components";
import { useState } from "react";

const MovieGrid = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  const { data: top, isLoading: isLoadingTop } = useQueryTopRated(
    1,
    selectedOption === "1"
  );
  const { data: popular, isLoading: isLoadingPopular } = useQueryPopular(
    1,
    selectedOption === "2"
  );
  const { data: debuts, isLoading: isLoadingDebuts } = useQueryDebut(
    1,
    selectedOption === "3"
  );
  const { data: playing, isLoading: isLoadingPlaying } = useQueryNowPlaying(
    1,
    selectedOption === "4"
  );

  const { movies, isLoading } = (() => {
    switch (selectedOption) {
      case "1":
        return { movies: top?.results ?? [], isLoading: isLoadingTop };
      case "2":
        return { movies: popular?.results ?? [], isLoading: isLoadingPopular };
      case "3":
        return { movies: debuts?.results ?? [], isLoading: isLoadingDebuts };
      case "4":
        return { movies: playing?.results ?? [], isLoading: isLoadingPlaying };
      default:
        return { movies: [], isLoading: false };
    }
  })();

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
      <div className={isLoading ? styles.moviesDisabled : styles.moviesActive}>
        {isLoading ? (
          <div className={styles.containerLoader}>
            <div className={styles.loader} />
          </div>
        ) : movies.length ? (
          movies.map((movie) => (
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
};

export default MovieGrid;
