import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);

    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();
  return (
    <nav className={styles.container}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
        aria-label="Previous page"
      >
        <ChevronLeft />
      </button>

      <div className={styles.pageList}>
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`${styles.button} ${
              currentPage === pageNumber ? styles.active : ""
            }`}
            aria-current={currentPage === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.button}
        aria-label="Next page"
      >
        <ChevronRight />
      </button>
    </nav>
  );
};

export default Pagination;
