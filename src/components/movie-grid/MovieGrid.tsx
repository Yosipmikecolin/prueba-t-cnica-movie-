import styles from "./MovieGrid.module.css";

const movies = [
  {
    id: 1,
    title: "The Grand Budapest Hotel",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 2,
    title: "Moonlight",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 3,
    title: "La La Land",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 4,
    title: "Parasite",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 5,
    title: "The Shape of Water",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=2940&q=80",
  },
];

export default function MovieGrid() {
  return (
    <div className={styles.grid}>
      <h2 className={styles.title}>Featured Movies</h2>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <img
              src={movie.image}
              alt={movie.title}
              className={styles.movieImage}
            />
            <div className={styles.movieOverlay}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
