import React from "react";
import styles from "./CardDetail.module.css";

function CardDetail({ name, types, image, attack }) {
  return (
    <div>
      <div className={styles.container} key="id">
        <div className={styles.title}>
          <div className={styles.containerImage}>
            <img className={styles.imagen} src={image} alt="img" />
          </div>
          <div className={styles.name}>
            <p>Name: {name}</p>
          </div>
          <div className={styles.attack}>
            <p>Attack: {attack}</p>
          </div>
          <div className={styles.type}>
            <p>Type: {types.toString().split(" ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
