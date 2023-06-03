import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPokemon, getTypes } from "../../redux/action/action";
import validate from "../../utils/index";
// import image from "../../assest/pikachu.png";
import styles from "./Form.module.css";

function Form() {
  const dispatch = useDispatch();
  const pokemontype = useSelector((state) => state.pokemonType);

  const [input, setInput] = useState({
    image: "",
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    image: "",
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    setInput({
      ...input,
      types: [...input.types, event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPokemon(input));
    window.alert("personaje creado con exito");
    setInput({
      image: "",
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleDelette = (el) => {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== el),
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Registra tu pokemon</h1>
      {/* <img className={styles.imagen} src={image} alt="img" /> */}
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div className={styles.containerLableInput}>
          <div>
            <label className={styles.label} htmlFor="imagen">
              Imagen
              <input type="text" placeholder="Image" id="imagen" />
            </label>
          </div>
          <div>
            <label className={styles.label} htmlFor="name">
              Name
              <input
                value={input.name}
                name="name"
                type="text"
                placeholder="Name"
                id="name"
                onChange={handleChange}
              />
            </label>
            {errors.name && <p className={styles.errors}>{errors.name}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor="hp">
              Life
              <input
                value={input.hp}
                name="hp"
                type="text"
                placeholder="Life"
                id="hp"
                onChange={handleChange}
              />
            </label>
            {errors.hp && <p className={styles.errors}>{errors.hp}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor="Attack">
              Attack
              <input
                value={input.attack}
                name="attack"
                type="text"
                placeholder="Attack"
                id="Attack"
                onChange={handleChange}
              />{" "}
            </label>
            {errors.attack && <p className={styles.errors}>{errors.attack}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor="Defense">
              Defense
              <input
                value={input.defense}
                name="defense"
                type="text"
                placeholder="Defense"
                id="Defense"
                onChange={handleChange}
              />{" "}
            </label>
            {errors.defense && (
              <p className={styles.errors}>{errors.defense}</p>
            )}
          </div>
          <div>
            <label className={styles.label} htmlFor="Speed">
              Speed
              <input
                value={input.speed}
                name="speed"
                type="text"
                placeholder="Speed"
                id="Speed"
                onChange={handleChange}
              />{" "}
            </label>
            {errors.speed && <p className={styles.errors}>{errors.speed}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor="Height">
              Height
              <input
                value={input.height}
                name="height"
                type="text"
                placeholder="Height"
                id="Height"
                onChange={handleChange}
              />{" "}
            </label>
            {errors.height && <p className={styles.errors}>{errors.height}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor="Weight">
              Weight
              <input
                value={input.weight}
                name="weight"
                type="text"
                placeholder="Weight"
                id="Weight"
                onChange={handleChange}
              />{" "}
            </label>
            {errors.weight && <p className={styles.errors}>{errors.weight}</p>}
          </div>
          <div className={styles.containerType}>
            <div>
              <label className={styles.label} htmlFor="types">
                Type{" "}
                <select
                  className={styles.select}
                  onChange={(event) => handleSelect(event)}
                >
                  {pokemontype &&
                    pokemontype.map((el) => (
                      <option key={el.name} value={el.name}>
                        {el.name}
                      </option>
                    ))}
                </select>{" "}
              </label>
            </div>
            <div className={styles.containerTypes}>
              <span className={styles.spanTypes}>
                {input.types.map((el) => (
                  <div className={styles.containerP} key={el}>
                    <p className={styles.elP}>{el}</p>
                    <button
                      className={styles.buttonType}
                      onClick={() => handleDelette(el)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </span>
            </div>
          </div>
          <div>
            <button className={styles.buton} type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

/* const validate = (input) => {
  if (num.test(input.hp)) {
    setErrors({
      ...errors,
      hp: "",
    });
  } else {
    setErrors({
      ...errors,
      hp: "Solo numeros maximo 3 digitos",
    });
  }
  if (num.test(input.attack)) {
    setErrors({ ...errors, attack: "" });
  } else {
    setErrors({ ...errors, attack: "Solo numeros maximo 3 digitos" });
  }
}; */
