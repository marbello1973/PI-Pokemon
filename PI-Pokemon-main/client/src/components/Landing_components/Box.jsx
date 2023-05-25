import styles from "./Box.module.css";

import React from "react";

function Box() {
  return (
    <div className={styles.container}>
      <div className={styles.containertitle}>
        <div className={styles.containerh1}>
          <h2 className={styles.h1}>WELCOME</h2>
        </div>
        <div className={styles.containerh2}>
          <h1 className={styles.h2}>PIKACHU</h1>
        </div>
      </div>
    </div>
  );
}

export default Box;
