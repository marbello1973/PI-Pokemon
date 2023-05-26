import React from "react";
import style from "./Search.module.css";

function Search() {
  return (
    <div className={style.container}>
      <p>input para buscar</p>
      <input type="text" />
      <button>Buscar</button>
    </div>
  );
}

export default Search;
