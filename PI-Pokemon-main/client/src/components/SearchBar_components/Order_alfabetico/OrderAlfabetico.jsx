import React from "react";
import { orderByName } from "../../../redux/action/action";
import { useDispatch } from "react-redux";

function OrderAlfabetico() {
  const dispatch = useDispatch();
  const handlerOrderName = (event) => {
    dispatch(orderByName(event.target.value));
    console.log(event.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <label title="filter-type">Ordenamiento alfabetico</label>
        </div>
        <select onChange={handlerOrderName}>
          <option value="All">All</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default OrderAlfabetico;
