import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar_components/SearchBar/SearchBar";
import CardContainer from "../../components/Card_container/CardContainer";
import { getPokemons } from "../../redux/action/action";
import { useDispatch } from "react-redux";
import styles from "./Home.module.css";

function Home() {
  // console.log(<SearchBar />);
  // console.log(SearchBar());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  });

  return (
    <div className={styles.container}>
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
