import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDetail from "../Card_detail/CardDetail";
import { getPokemons } from "../../redux/action/action";
import Paginado from "../Paginado/Paginado";
import style from "./CardContainer.module.css";

function CardContainer() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons);
  const [current, setCurrent] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [pokePage, setPokePage] = useState(12);
  const index = current * pokePage;
  const indexPage = index - pokePage;
  const currentPoke = pokemon.slice(indexPage, index);

  const paginado = (pageNumber) => {
    setCurrent(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons(pokemon));
    setCurrent(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.paginado}>
        <Paginado
          pokePage={pokePage}
          pokemon={pokemon.length}
          paginado={paginado}
        />
      </div>
      <div className={style.cardContainer}>
        {currentPoke?.map((el) => {
          return (
            <CardDetail
              key={el.id}
              id={el.id}
              name={el.name}
              image={el.image}
              attack={el.attack}
              defense={el.defense}
              speed={el.speed}
              height={el.height}
              weight={el.weight}
              types={el.types?.map((el) => el.name)}
              createdDB={el.createdDB}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer;
