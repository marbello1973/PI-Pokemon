import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import React from "react";
function Button() {
  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <Link to="/home">
          <button className={styles.button}>
            <h1>let's go home</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Button;
