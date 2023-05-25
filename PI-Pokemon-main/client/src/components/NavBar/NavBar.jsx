import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState();
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_logo}>Pokemon page</div>
      <div className={`${styles.nav_items} ${isOpen && styles.open}`}>
        <Link to={"/home"} className={styles.home}>
          Home
        </Link>
        <Link to={"/form"} className={styles.form}>
          Form
        </Link>
      </div>
      <div
        className={`${styles.nav_toggle} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavBar;
