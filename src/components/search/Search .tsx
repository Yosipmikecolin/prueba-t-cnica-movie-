import { Check } from "lucide-react";
import styles from "./Search.module.css";

interface Props {
  search: string;
  refetch: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const options = [
  { id: "2", label: "Top" },
  { id: "3", label: "Populares" },
  { id: "4", label: "Estrenos" },
  { id: "5", label: "En cartelera" },
];

const Search = ({
  search,
  refetch,
  setSearch,
  selectedOption,
  setSelectedOption,
}: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value.trim());
    refetch();
    setSelectedOption(value !== "" ? "1" : "2");
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
              onChange={() => {
                setSelectedOption(option.id), setSearch("");
              }}
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
