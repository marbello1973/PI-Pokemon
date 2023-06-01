import React /* , { useEffect } */ from "react";
import { /*  useSelector, */ useDispatch } from "react-redux";
import { filterApiBdd } from "../../../redux/action/action";

function Filterorigin() {
  const dispatch = useDispatch();
  // const pokemon = useSelector((state) => state.pokemons);

  // useEffect(() => {
  //   dispatch(filterApiBdd(pokemon));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  const handlerFilterApiBdd = (event) => {
    event.preventDefault();
    dispatch(filterApiBdd(event.target.value));
  };

  return (
    <div>
      <div>
        <label title="filter-type">Filtrar por Api - Bdd</label>
      </div>
      <div>
        <select onChange={(event) => handlerFilterApiBdd(event)}>
          <option value="All">All</option>
          <option value="Api">Api</option>
          <option value="Bdd">Bdd</option>
        </select>
      </div>
    </div>
  );
}

export default Filterorigin;
