import React from "react";
import Search from "../Search/Search";
import Filtertype from "../Filter_type/Filtertype";
import style from "./SearchBar.module.css";
import Filterorigin from "../Filter_origin/Filterorigin";
import OrderAceDec from "../Order_ace_dec/OrderAceDec";
import OrderAlfabetico from "../Order_alfabetico/OrderAlfabetico";
import Orderattack from "../Order_attack/Orderattack";

function SearchBar() {
  return (
    <div className={style.container}>
      <p>SearchBar barra de busqueda</p>
      <div>
        <Search />
      </div>
      <div>
        <Filtertype />
        <Filterorigin />
      </div>
      <OrderAceDec />
      <OrderAlfabetico />
      <Orderattack />
    </div>
  );
}

export default SearchBar;
