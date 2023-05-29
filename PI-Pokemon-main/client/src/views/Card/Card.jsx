import styles from "./Card.module.css";
import { pokemonById } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Card(id) {
  const dispatch = useDispatch();
  const params = useParams({ id });
  console.log(params);
  const pokemonid = useSelector((state) => state.pokemonID);
  console.log(pokemonid);

  useEffect(() => {
    dispatch(pokemonById(params));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.cardDetail}>
      <p>card de detalles</p>
    </div>
  );
}
export default Card;

/* 
ID.
Nombre.
Imagen.
Vida.
Ataque.
Defensa.
Velocidad (si tiene).
Altura (si tiene).
Peso (si tiene).
Tipo

key={el.id}
id={el.id}
name={el.name}
image={el.image}
attack={el.attack}
defense={el.defense}
speed={el.speed}
height={el.height}
weight={el.weight}
types={el.types.map((el) => el.name)}
createdDB={el.createdDB} */
