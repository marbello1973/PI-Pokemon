import React, { useState /* , useEffect */ } from "react";
import { useDispatch /* , useSelector */ } from "react-redux";
import { orderAccDcc } from "../../../redux/action/action";
import style from "./OrderAceDec.module.css";

function OrderAceDec() {
  // const pokemon = useSelector((state) => state.allPokemons);
  const dispatch = useDispatch();

  // console.log(pokemon);
  // eslint-disable-next-line
  const [order, setOrder] = useState("");
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);

  const handleOrderName = (event) => {
    dispatch(orderAccDcc(event.target.value));
    setCurrentPage(1);
    setOrder(`${event.target.value}`);
  };

  // useEffect(() => {
  //   dispatch(orderAccDcc(pokemon));
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <div>
        <label className={style.label} title="filter-type">
          Ordenamiento Acc-Dcc
        </label>
      </div>
      <select
        className={style.select}
        onChange={(event) => handleOrderName(event)}
      >
        <option value="All">All</option>
        <option value="Acc">Ascendente</option>
        <option value="Dcc">Descendente</option>
      </select>
    </div>
  );
}

export default OrderAceDec;
