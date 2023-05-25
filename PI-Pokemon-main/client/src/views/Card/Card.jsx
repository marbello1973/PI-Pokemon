import React from "react";
import styles from "./Card.module.css";
import CardContainer from "../../components/Card_container/CardContainer";

function Cards() {
  return (
    <div>
      <div>Cards</div>
      <div className={styles.cardDetail}>
        <CardContainer />
      </div>
    </div>
  );
}

export default Cards;
