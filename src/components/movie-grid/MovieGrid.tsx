import { useState } from "react";
import { Search } from "../../components";
import {
  useQueryDebut,
  useQueryNowPlaying,
  useQueryPopular,
  useQuerySearchMovies,
  useQueryTopRated,
} from "../../api/queries";
import { Popcorn, Star } from "lucide-react";
import styles from "./MovieGrid.module.css";

const MovieGrid = () => {
  const [selectedOption, setSelectedOption] = useState("2");
  const [search, setSearch] = useState("");

  const {
    data: moviesSearch,
    isLoading: isLoadingSearch,
    refetch,
  } = useQuerySearchMovies(
    search,
    1,
    selectedOption === "1" && search.trim() !== ""
  );

  const { data: top, isLoading: isLoadingTop } = useQueryTopRated(
    1,
    selectedOption === "2"
  );
  const { data: popular, isLoading: isLoadingPopular } = useQueryPopular(
    1,
    selectedOption === "3"
  );
  const { data: debuts, isLoading: isLoadingDebuts } = useQueryDebut(
    1,
    selectedOption === "4"
  );
  const { data: playing, isLoading: isLoadingPlaying } = useQueryNowPlaying(
    1,
    selectedOption === "5"
  );

  const { movies, isLoading } = (() => {
    switch (selectedOption) {
      case "1":
        return {
          movies: moviesSearch?.results ?? [],
          isLoading: isLoadingSearch,
        };
      case "2":
        return { movies: top?.results ?? [], isLoading: isLoadingTop };
      case "3":
        return { movies: popular?.results ?? [], isLoading: isLoadingPopular };
      case "4":
        return { movies: debuts?.results ?? [], isLoading: isLoadingDebuts };
      case "5":
        return { movies: playing?.results ?? [], isLoading: isLoadingPlaying };
      default:
        return { movies: [], isLoading: false };
    }
  })();

  return (
    <div className={styles.grid}>
      <div className={styles.siverBar}>
        <Search
          search={search}
          refetch={refetch}
          setSearch={setSearch}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <h2 className={styles.title}>
        {selectedOption === "1" && "Busqueda"}
        {selectedOption === "2" && "Más valoradas"}
        {selectedOption === "3" && "Populares"}
        {selectedOption === "4" && "Estrenos"}
        {selectedOption === "5" && "En cartelera"}
      </h2>
      <div
        className={
          isLoading || !movies.length
            ? styles.moviesDisabled
            : styles.moviesActive
        }
      >
        {isLoading ? (
          <div className={styles.containerLoader}>
            <div className={styles.loader} />
          </div>
        ) : movies.length ? (
          movies.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              {movie.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  className={styles.movieImage}
                />
              ) : (
                <div className={styles.noImage}>
                  <h3>Sin imagen</h3>
                </div>
              )}

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
          <div className={styles.containerNoFoundMovie}>
            <h1>Sin películas</h1>
            <Popcorn size={70} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieGrid;
