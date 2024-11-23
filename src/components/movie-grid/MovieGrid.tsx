import { useState } from "react";
import { Pagination, Search } from "../../components";
import {
  useQueryDebut,
  useQueryNowPlaying,
  useQueryPopular,
  useQuerySearchMovies,
  useQueryTopRated,
} from "../../api/queries";
import { Popcorn, Star } from "lucide-react";
import styles from "./MovieGrid.module.css";
import { useMovie } from "../../hooks/useMovie";

const MovieGrid = () => {
  const [selectedOption, setSelectedOption] = useState("2");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { setMovie } = useMovie();

  const {
    data: moviesSearch,
    isLoading: isLoadingSearch,
    refetch,
  } = useQuerySearchMovies(
    search,
    currentPage,
    selectedOption === "1" && search.trim() !== ""
  );

  const { data: top, isLoading: isLoadingTop } = useQueryTopRated(
    currentPage,
    selectedOption === "2"
  );
  const { data: popular, isLoading: isLoadingPopular } = useQueryPopular(
    currentPage,
    selectedOption === "3"
  );
  const { data: debuts, isLoading: isLoadingDebuts } = useQueryDebut(
    currentPage,
    selectedOption === "4"
  );
  const { data: playing, isLoading: isLoadingPlaying } = useQueryNowPlaying(
    currentPage,
    selectedOption === "5"
  );

  const { movies, isLoading } = (() => {
    switch (selectedOption) {
      case "1":
        return {
          movies: {
            result: moviesSearch?.results ?? [],
            totalPages: moviesSearch?.total_pages,
          },
          isLoading: isLoadingSearch,
        };
      case "2":
        return {
          movies: { result: top?.results ?? [], totalPages: top?.total_pages },
          isLoading: isLoadingTop,
        };
      case "3":
        return {
          movies: {
            result: popular?.results ?? [],
            totalPages: popular?.total_pages,
          },
          isLoading: isLoadingPopular,
        };
      case "4":
        return {
          movies: {
            result: debuts?.results ?? [],
            totalPages: debuts?.total_pages,
          },
          isLoading: isLoadingDebuts,
        };
      case "5":
        return {
          movies: {
            result: playing?.results ?? [],
            totalPages: playing?.total_pages,
          },
          isLoading: isLoadingPlaying,
        };
      default:
        return { movies: { result: [], total_pages: 0 }, isLoading: false };
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
          isLoading || !movies.result.length
            ? styles.moviesDisabled
            : styles.moviesActive
        }
      >
        {isLoading ? (
          <div className={styles.containerLoader}>
            <div className={styles.loader} />
          </div>
        ) : movies.result.length ? (
          <>
            {movies.result.map((movie) => (
              <div key={movie.id} className={styles.movie}>
                {movie.backdrop_path ? (
                  <div className={styles.containerImage}>
                    <div className={styles.skeleton} />
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className={styles.movieImage}
                    />
                  </div>
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
                <button
                  className={styles.buttonMovie}
                  onClick={() => setMovie(movie)}
                >
                  Ver detalles
                </button>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.containerNoFoundMovie}>
            <h1>Sin películas</h1>
            <Popcorn size={70} />
          </div>
        )}
      </div>
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={movies.totalPages || 0}
        />
      )}
    </div>
  );
};

export default MovieGrid;
