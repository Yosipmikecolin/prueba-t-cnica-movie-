import { useState, useEffect } from "react";
import styles from "./MovieSlider.module.css";
import ImgAvatar from "../../assets/avatar.jpg";
import ImgAlien from "../../assets/alien.webp";
import ImgDune from "../../assets/dune.jpg";
import ImgTerrifier from "../../assets/terrifier.jpg";

const slides = [
  {
    id: 1,
    title: "Avatar 2",
    description:
      "Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
    image: ImgAvatar,
  },
  {
    id: 2,
    title: "Dune 2",
    description:
      "Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia. Paul se enfrenta a una elección entre el amor de su vida y el destino del universo, y debe evitar un futuro terrible.",
    image: ImgDune,
  },
  {
    id: 3,
    title: "Alien Romulus",
    description:
      "Un grupo de colonos espaciales se enfrenta a la criatura más aterradora del universo en una nave espacial abandonada a la que han accedido para recuperar cámaras de criostasis, con las que piensan huir a un planeta lejano.",
    image: ImgAlien,
  },
  {
    id: 4,
    title: "Terrifier 3",
    description:
      "Terrifier 3 es una película de slasher y gore estadounidense de 2024, dirigida y escrita por Damien Leone. Está protagonizada por Lauren LaVera, Elliott Fullam, David Howard Thornton y Samantha Scaffidi, quienes repiten sus papeles de películas anteriores.",
    image: ImgTerrifier,
  },
];

export default function MovieSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const selectMovie = (id: number) => {
    setCurrentSlide(id);
  };
  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentSlide ? styles.slideActive : ""
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={styles.slideImage}
          />
          <div className={styles.slideContent}>
            <h2 className={styles.slideTitle}>{slide.title}</h2>
            <p className={styles.slideDescription}>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className={styles.sliderNav}>
        {slides.map((movie) => (
          <button
            key={movie.id}
            onClick={() => selectMovie(movie.id - 1)}
            className={
              currentSlide + 1 === movie.id
                ? styles["navButton-active"]
                : styles["navButton-disabled"]
            }
          ></button>
        ))}
      </div>
    </div>
  );
}
