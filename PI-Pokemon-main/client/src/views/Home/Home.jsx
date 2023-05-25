import React from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Card />
    </div>
  );
}

export default Home;
