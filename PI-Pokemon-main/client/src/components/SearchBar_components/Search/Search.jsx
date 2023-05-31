import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByName, getPokemons } from "../../../redux/action/action";
import style from "./Search.module.css";

function Search() {
  const allPokemon = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleOnchange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchByName(name));
    setName("");
  };

  const onInput = (e) => setName(e.target.value);

  useEffect(() => {
    dispatch(getPokemons);
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div>
        <label htmlFor="buscar">input para buscar</label>
        <input
          value={name}
          onInput={onInput}
          onChange={(e) => handleOnchange(e)}
          type="search"
          placeholder={"Buscar pokemon..."}
          id="buscar"
        />
      </div>
      <div>
        {allPokemon.length > 1 ? (
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Buscar
          </button>
        ) : (
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Regresar
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
