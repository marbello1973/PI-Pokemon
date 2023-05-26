import React from "react";
import styles from "./CardDetail.module.css";

function CardDetail(props) {
  return (
    <div>
      <div className={styles.container} key="id">
        <div className={styles.title}>
          <div className={styles.containerImage}>
            <img className={styles.imagen} src={props.image} alt="img" />
          </div>
          <div className={styles.name}>
            <p>Name:{props.name}</p>
          </div>
          <div className={styles.name}>
            <p>Attack:{props.attack}</p>
          </div>
          <div className={styles.type}>
            <p>Type:{props.createDB}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
