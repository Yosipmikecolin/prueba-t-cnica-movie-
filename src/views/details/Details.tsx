import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryMovie } from "../../api/queries";
import { useId } from "../../hooks/useId";
import { Annoyed, ArrowLeft } from "lucide-react";
import styles from "./Details.module.css";

const Details = () => {
  const { id } = useId();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id]);

  if (id) {
    const { data: movie, isLoading } = useQueryMovie(id);
    return (
      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.containerLoader}>
            <div className={styles.loader} />
          </div>
        ) : (
          <div className={styles.containerInfo}>
            <div>
              <button
                className={styles.buttonBack}
                onClick={() => navigate("/")}
              >
                <ArrowLeft /> Atras
              </button>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                width={300}
              />
            </div>

            <div className={styles.containerDetails}>
              <h1>{movie?.title}</h1>
              <p>{movie?.overview}</p>
              <span
                className={styles.details}
                style={{ backgroundColor: "#3D5300" }}
              >
                Fecha: {movie?.release_date}
              </span>
              <span
                className={styles.details}
                style={{ backgroundColor: "#FAB12F" }}
              >
                Popularidad: {movie?.popularity}
              </span>
              <span
                className={styles.details}
                style={{ backgroundColor: "#3D3BF3" }}
              >
                Duración: {movie?.runtime} minutos
              </span>
              <div
                className={styles.details}
                style={{ backgroundColor: "#AF1740" }}
              >
                <span>Generos:</span>
                <hr />
                <ul>
                  {movie?.genres.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.noID}>
        <h1>Sin ID</h1>
        <Annoyed size={50} />
      </div>
    );
  }
};

export default Details;
