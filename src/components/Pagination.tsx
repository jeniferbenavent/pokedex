import "../styles/Pagination.css";
import { PaginationProps } from "../interfaces/Pokemon"

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <footer className="pagination-container">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-anterior">
        <span className="ltgt">&lt; </span>Previous
      </button>
      <button onClick={() => onPageChange(currentPage + 1)} className="pagination-next">
        Next<span className="ltgt"> &gt;</span>
      </button>
    </footer>
  )
}
