import { useState } from "react";
import { Check } from "lucide-react";
import styles from "./Search.module.css";

interface Props {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const options = [
  { id: "1", label: "Top" },
  { id: "2", label: "Populares" },
  { id: "3", label: "Estrenos" },
  { id: "4", label: "En cartelera" },
];

const Search = ({ selectedOption, setSelectedOption }: Props) => {
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    setSelectedOption(value === "" ? "1" : "0");
  };

  return (
    <div className={styles.container}>
      <input
        value={search}
        placeholder="Buscar película"
        className={styles["input-search"]}
        onChange={onChange}
      />
      <div className={styles.optionsList}>
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
