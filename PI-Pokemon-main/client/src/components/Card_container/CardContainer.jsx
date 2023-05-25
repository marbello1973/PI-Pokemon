import React from "react";
import { useSelector } from "react-redux";
import CardDetail from "../Card_detail/CardDetail";
import style from "./CardContainer.module.css";

function CardContainer() {
  const pokemon = [
    {
      id: 1,
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
      height: 7,
      weight: 69,
      createdDb: false,
    },
    {
      id: 2,
      name: "ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      hp: 60,
      attack: 62,
      defense: 63,
      speed: 60,
      height: 10,
      weight: 130,
      createdDb: false,
    },
    {
      id: 3,
      name: "venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      hp: 80,
      attack: 82,
      defense: 83,
      speed: 80,
      height: 20,
      weight: 1000,
      createdDb: false,
    },
    {
      id: 4,
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65,
      height: 6,
      weight: 85,
      createdDb: false,
    },
    {
      id: 5,
      name: "charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      hp: 58,
      attack: 64,
      defense: 58,
      speed: 80,
      height: 11,
      weight: 190,
      createdDb: false,
    },
    {
      id: 6,
      name: "charizard",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
      height: 17,
      weight: 905,
      createdDb: false,
    },
    {
      id: 7,
      name: "squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
      height: 5,
      weight: 90,
      createdDb: false,
    },
    {
      id: 8,
      name: "wartortle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      hp: 59,
      attack: 63,
      defense: 80,
      speed: 58,
      height: 10,
      weight: 225,
      createdDb: false,
    },
    {
      id: 9,
      name: "blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      hp: 79,
      attack: 83,
      defense: 100,
      speed: 78,
      height: 16,
      weight: 855,
      createdDb: false,
    },
    {
      id: 10,
      name: "caterpie",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      hp: 45,
      attack: 30,
      defense: 35,
      speed: 45,
      height: 3,
      weight: 29,
      createdDb: false,
    },
    {
      id: 11,
      name: "metapod",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      hp: 50,
      attack: 20,
      defense: 55,
      speed: 30,
      height: 7,
      weight: 99,
      createdDb: false,
    },
    {
      id: 12,
      name: "butterfree",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      hp: 60,
      attack: 45,
      defense: 50,
      speed: 70,
      height: 11,
      weight: 320,
      createdDb: false,
    },
  ];

  // const pokemon = useSelector((state) => state.payload);
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
