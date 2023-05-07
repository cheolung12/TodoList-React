import React, { useContext } from "react";
import styles from "../css/Header.module.css";
import {HiMoon, HiSun} from "react-icons/hi";
import { DarkModeContext } from "../contexts/DarkMode";

export default function Header( { filters, filter, onFilterChange }) {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);


  return (
    <header className={styles.header}>
        <button className={styles.toggle} onClick={toggleDarkMode}>
            {darkMode 
            ? <HiSun />
            : <HiMoon />
            }
          </button>
        <ul className={styles.filters}>
          {filters.map((f, i) => 
          <li key={i}>
            {/* className을 여러개 조합해서 쓰려면 백틱활용해서 사용 */}
            <button className={`${styles.filter} ${filter === f && styles.selected}`} onClick={() => onFilterChange(f)}>{f}</button>
          </li> 
          )}
        </ul>
    </header>
  );
}
