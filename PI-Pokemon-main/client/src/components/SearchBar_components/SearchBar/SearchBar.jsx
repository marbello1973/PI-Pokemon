import React, { useEffect } from "react";
import Search from "../Search/Search";
import Filtertype from "../Filter_type/Filtertype";
import Filterorigin from "../Filter_origin/Filterorigin";
import OrderAceDec from "../Order_ace_dec/OrderAceDec";
import OrderAlfabetico from "../Order_alfabetico/OrderAlfabetico";
import Orderattack from "../Order_attack/Orderattack";
//
import { orderAccDcc } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
//
import style from "./SearchBar.module.css";

function SearchBar() {
  const pokemon = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderAccDcc(pokemon));

    // eslint-disable-next-line
  }, [dispatch, pokemon]);

  return (
    <div className={style.container}>
      <p>SearchBar barra de busqueda y ordenamiento</p>
      <Search />
      <OrderAceDec />
      <OrderAlfabetico />
      <Orderattack />
      <Filtertype />
      <Filterorigin />
    </div>
  );
  /* console.log(element);
  return element; */
}

export default SearchBar;
