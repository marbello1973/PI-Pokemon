import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPokemon, getTypes } from "../../redux/action/action";
import validate from "../../utils/index";
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
      <h1>Form</h1>
      <div onSubmit={(e) => handleSubmit(e)} className={styles.containerForm}>
        <form className={styles.form}>
          <div>
            <label htmlFor="imagen">Imagen</label>
            <input type="text" placeholder="Image" id="imagen" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              value={input.name}
              name="name"
              type="text"
              placeholder="Name"
              id="name"
              onChange={handleChange}
            />
            {errors.name && <p className={styles.errors}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="hp">Hp</label>
            <input
              value={input.hp}
              name="hp"
              type="text"
              placeholder="Life"
              id="hp"
              onChange={handleChange}
            />
            <span>{errors.hp}</span>
          </div>
          <div>
            <label htmlFor="Attack">Attack</label>
            <input
              value={input.attack}
              name="attack"
              type="text"
              placeholder="Attack"
              id="Attack"
              onChange={handleChange}
            />
            <span>{errors.attack}</span>
          </div>
          <div>
            <label htmlFor="Defense">Defense</label>
            <input
              value={input.defense}
              name="defense"
              type="text"
              placeholder="Defense"
              id="Defense"
              onChange={handleChange}
            />
            {errors.defense && (
              <p className={styles.errors}>{errors.defense}</p>
            )}
          </div>
          <div>
            <label htmlFor="Speed">Speed</label>
            <input
              value={input.speed}
              name="speed"
              type="text"
              placeholder="Speed"
              id="Speed"
              onChange={handleChange}
            />
            {errors.speed && <p className={styles.errors}>{errors.speed}</p>}
          </div>
          <div>
            <label htmlFor="Height">Height</label>
            <input
              value={input.height}
              name="height"
              type="text"
              placeholder="Height"
              id="Height"
              onChange={handleChange}
            />
            {errors.height && <p className={styles.errors}>{errors.height}</p>}
          </div>
          <div>
            <label htmlFor="Weight">Weight</label>
            <input
              value={input.weight}
              name="weight"
              type="text"
              placeholder="Weight"
              id="Weight"
              onChange={handleChange}
            />
            {errors.weight && <p className={styles.errors}>{errors.weight}</p>}
          </div>
          <div>
            <label htmlFor="types">Type</label>
            <select onChange={(event) => handleSelect(event)}>
              {pokemontype &&
                pokemontype.map((el) => (
                  <option key={el.name} value={el.name}>
                    {el.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
        <div>
          <span>
            {input.types.map((el) => (
              <div key={el}>
                <p>{el}</p>
                <button onClick={() => handleDelette(el)}>X</button>
              </div>
            ))}
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
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
