import { HiChevronLeft } from "react-icons/hi";
import styles from "./Toggle.module.css";

export default function Toggle({ reversed = false, onClick }) {
  return (
    <button
      className={`${styles.button} ${reversed ? styles.reversed : ""}`}
      type="button"
      onClick={onClick}
    >
      <HiChevronLeft size="24" />
    </button>
  );
}
