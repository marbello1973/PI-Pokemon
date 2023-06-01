import React /* , { useEffect } */ from "react";
import { /* useSelector, */ useDispatch } from "react-redux";
import { filterType } from "../../../redux/action/action";

function Filtertype() {
  const dispatch = useDispatch();
  // const pokemon = useSelector((state) => state.pokemons);

  // useEffect(() => {
  //   dispatch(filterType(pokemon));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleFilter = (event) => {
    dispatch(filterType(event.target.value));
  };
  return (
    <div>
      <div>
        <label>Filtrar por typo</label>
      </div>
      <div>
        <select onChange={(event) => handleFilter(event)}>
          <option value="All">All</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="ghost">ghost</option>
          <option value="bug">bug</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dark">dark</option>
          <option value="dragon">dragon</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>
      </div>
    </div>
  );
}

export default Filtertype;
