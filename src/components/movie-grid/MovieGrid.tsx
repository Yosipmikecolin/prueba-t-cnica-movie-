import { Star } from "lucide-react";
import { useQueryTopRated } from "../../api/queries";
import styles from "./MovieGrid.module.css";

export default function MovieGrid() {
  const { data: movies } = useQueryTopRated(1);
  return (
    <div className={styles.grid}>
      <h2 className={styles.title}>Mas valoradas</h2>
      <div className={styles.movies}>
        {movies?.results.length ? (
          movies.results.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                className={styles.movieImage}
              />
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <div className={styles.movieOverlay}>
                <span>Califación: {movie.vote_average}</span>
                <span>
                  <Star color="#FFE31A" />
                </span>
              </div>
              <button className={styles.buttonMovie}>Ver detalles</button>
            </div>
          ))
        ) : (
          <h1>Sin peliculas</h1>
        )}
      </div>
    </div>
  );
}
