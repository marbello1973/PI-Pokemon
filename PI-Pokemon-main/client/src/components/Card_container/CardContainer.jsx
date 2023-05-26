import React from "react";
import { useSelector } from "react-redux";
import CardDetail from "../Card_detail/CardDetail";
import style from "./CardContainer.module.css";

function CardContainer() {
  const pokemon = useSelector((state) => state.pokemons);
  console.log(pokemon);
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        {pokemon?.map((el) => {
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
              createdDB={el.createdDB}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardContainer;
