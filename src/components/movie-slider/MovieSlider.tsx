import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./MovieSlider.module.css";

const slides = [
  {
    id: 1,
    title: "Dune: Part Two",
    description:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 2,
    title: "The Batman",
    description:
      "When a killer targets Gotham's elite with a series of sadistic machinations, Batman must forge new relationships, unmask the culprit, and bring justice.",
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=2940&q=80",
  },
  {
    id: 3,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2940&q=80",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
        <button onClick={prevSlide} className={styles.navButton}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className={styles.navButton}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
