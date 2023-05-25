import React from "react";
import styles from "./LandingPage.module.css";
import Imagen from "./Imagen";
import Box from "./Box";
import Button from "./Button";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainComponent}>
        <div>
          <Imagen />
        </div>
        <div>
          <Box />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
