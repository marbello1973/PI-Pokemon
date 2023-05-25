import styles from "./Imagen.module.css";
import image from "../../assest/pikachu.png";
import React from "react";

function Imagen() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img src={image} alt="pikachu" className={styles.imagen} />
      </div>
    </div>
  );
}

export default Imagen;
