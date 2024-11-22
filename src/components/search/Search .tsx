import { useState } from "react";
import { Check } from "lucide-react";
import styles from "./Search.module.css";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "1", label: "Top" },
  { id: "2", label: "Populares" },
  { id: "3", label: "Extrenos" },
  { id: "4", label: "Cartelera" },
];

const Search = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  return (
    <div className={styles.container}>
      <div className={styles.optionsList}>
        <input
          placeholder="Buscar pelicula"
          className={styles["input-search"]}
        />
        {options.map((option) => (
          <label key={option.id} className={styles.option}>
            <div className={styles.checkboxWrapper}>
              <div
                className={`${styles.checkbox} ${
                  selectedOption === option.id ? styles.checked : ""
                }`}
              >
                {selectedOption === option.id && (
                  <Check className={styles.checkIcon} strokeWidth={3} />
                )}
              </div>
            </div>
            <input
              type="radio"
              className={styles.hiddenInput}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              name="options"
              value={option.id}
            />
            <span
              className={`${styles.label} ${
                selectedOption === option.id ? styles.selectedLabel : ""
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Search;
