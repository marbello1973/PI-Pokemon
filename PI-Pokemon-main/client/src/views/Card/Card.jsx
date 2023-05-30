import { pokemonById } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import imagen from "../../assest/pikachu.png";
import styles from "./Card.module.css";

function Card() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const pokemonid = useSelector((state) => state.pokemonID);

  console.log(pokemonid);

  useEffect(() => {
    dispatch(pokemonById(id));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.cardDetail}>
      {pokemonid.map((el) => {
        return (
          <div key={id}>
            <div>
              <p>Detalles Pokemon</p>
            </div>
            <div>
              <img src={el.image ? el.image : imagen} alt="" />
            </div>
            <div>
              <p>Id: {el.id}</p>
              <p>Nombre: {el.name}</p>
              <p>Ataque: {el.attack}</p>
              <p>Defensa: {el.defense}</p>
              <p>Velocidad: {el.speed}</p>
              <p>Altura: {el.height}</p>
              <p>Peso: {el.weight}</p>
              <p>
                Typo: {!el.createdDB ? el.types : el.types.map((el) => el.name)}
              </p>
            </div>
          </div>
        );
      })}

      {/* <div className={styles.containerCard}>
        <p className={styles.title}>detalles del pokemon</p>
        <div className={styles.containerImage}>
          <img className={styles.image} src={pokemonid.image} alt="imagen" />
        </div>
        <div className={styles.containerTitle}>
          <p>Id: {pokemonid.id}</p>
          <p>Nombre: {pokemonid.name}</p>
          <p>Ataque: {pokemonid.attack}</p>
          <p>Defensa: {pokemonid.defense}</p>
          <p>Velocidad: {pokemonid.speed}</p>
          <p>Altura: {pokemonid.height}</p>
          <p>Peso: {pokemonid.weight}</p>
          <p>Typo: {pokemonid.types}</p>
          <p>Typo: {pokemonid.createdDB}</p>
        </div>
      </div> */}
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
