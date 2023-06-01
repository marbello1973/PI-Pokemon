import React from "react";
import SearchBar from "../../components/SearchBar_components/SearchBar/SearchBar";
import CardContainer from "../../components/Card_container/CardContainer";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div className={styles.containerComponents}>
        <div>
          <SearchBar />
        </div>
        <div></div>
        <div>
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
