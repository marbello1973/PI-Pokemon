import React from "react";
import { Link } from "react-router-dom";
import styles from "./CardDetail.module.css";

function CardDetail({ name, types, image, attack, id }) {
  return (
    <div>
      <div className={styles.container} key={id}>
        <div className={styles.title}>
          <div className={styles.containerImage}>
            <img className={styles.imagen} src={image} alt="img" />
          </div>
          <div className={styles.name}>
            <Link className={styles.link} to={`/home/${id}`}>
              <p>{name}</p>
            </Link>
          </div>
          <div className={styles.attack}>
            <p className={styles.attackP}>Attack: {attack}</p>
          </div>
          <div className={styles.type}>
            <p>Type: {types.slice("").join("-")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
