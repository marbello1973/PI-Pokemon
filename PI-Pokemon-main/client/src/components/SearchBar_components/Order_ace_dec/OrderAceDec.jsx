import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderAccDcc } from "../../../redux/action/action";

function OrderAceDec() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  // eslint-disable-next-line
  const [order, setOrder] = useState("");
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(orderAccDcc(pokemon));
    // eslint-disable-next-line
  }, []);

  const handleOrderName = (event) => {
    dispatch(orderAccDcc(event.target.value));
    setCurrentPage(1);
    setOrder(`${event.target.value}`);
  };
  return (
    <div>
      <div>
        <label title="filter-type">Ordenamiento Acc-Dcc</label>
      </div>
      <select onChange={handleOrderName}>
        <option value="All">All</option>
        <option value="Acc">Ascendente</option>
        <option value="Dcc">Descendente</option>
      </select>
    </div>
  );
}

export default OrderAceDec;
