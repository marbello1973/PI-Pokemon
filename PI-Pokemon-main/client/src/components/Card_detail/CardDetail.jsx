import React from "react";
import styles from "./CardDetail.module.css";
import { Link } from "react-router-dom";

function CardDetail({ name, types, image, attack, id }) {
  return (
    <div>
      <div className={styles.container} key="id">
        <div className={styles.title}>
          <div className={styles.containerImage}>
            <img className={styles.imagen} src={image} alt="img" />
          </div>
          <div className={styles.name}>
            <Link to={`/home/${id}`}>
              <p>Name: {name}</p>
            </Link>
            <p>Id: {id}</p>
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
