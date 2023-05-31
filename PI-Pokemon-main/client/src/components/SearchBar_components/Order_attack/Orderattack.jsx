import React from "react";
import { orderAttack } from "../../../redux/action/action";
import { useDispatch /* , useSelector */ } from "react-redux";

function Orderattack() {
  const dispatch = useDispatch();
  // const pokemon = useSelector((state) => state.pokemons);

  const handleOrderAttack = (event) => {
    dispatch(orderAttack(event.target.value));
    console.log(event.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <label title="filter-type">Ordenamiento por ataque</label>
        </div>
        <select onChange={handleOrderAttack}>
          <option value="All">All</option>
          <option value="max">Attack maximo</option>
          <option value="min">Attack minimo</option>
        </select>
      </div>
    </div>
  );
}

export default Orderattack;
