import styles from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
export default function NavigationItem({ to, text, icon }) {
  return (
    <li className={styles.item}>
      <NavLink to={to}>
         {icon}
      {text}
      </NavLink>
     
    </li>
  );
}
