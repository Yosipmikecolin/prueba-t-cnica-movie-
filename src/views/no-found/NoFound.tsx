import { Annoyed } from "lucide-react";
import styles from "./NoFound.module.css";

const NoFound = () => {
  return (
    <div className={styles.container}>
      <h1>Esta página no existe</h1>
      <Annoyed size={80} />
    </div>
  );
};

export default NoFound;
