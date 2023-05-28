import React from "react";
import styles from "./Home.module.css";
// import Card from "../Card/Card";
import SearchBar from "../../components/SearchBar_components/SearchBar/SearchBar";
import CardContainer from "../../components/Card_container/CardContainer";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div className={styles.containerComponents}>
        <div>
          <SearchBar />
        </div>
        <div>
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
