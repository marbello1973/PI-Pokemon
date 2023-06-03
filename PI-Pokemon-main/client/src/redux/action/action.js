import axios from "axios";
import {
  GET_POKEMONS,
  SEARCH_BY_NAME,
  FILTER_POKEMONS_TYPES,
  FILTER_API_BDD,
  ORDER_BY_ACC_DCC,
  ORDER_ATTACK,
  ORDER_BY_NAME,
  GET_POKEMONS_BY_ID,
  GET_TYPES,
} from "./action-types";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemon");
      const pokemons = response.data;
      // console.log(pokemons);
      dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export function searchByName(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:3001/pokemon/?name=${name}`
      );
      const pokeName = res.data;
      dispatch({
        type: SEARCH_BY_NAME,
        payload: pokeName,
      });
    } catch (error) {
      console.log({ msg: error.message });
    }
  };
}

export function pokemonById(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/pokemon/${id}`);
      const pokemonId = res.data;
      dispatch({
        type: GET_POKEMONS_BY_ID,
        payload: pokemonId,
      });
    } catch (error) {
      console.log({ msg: error.message });
    }
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    const res = await axios.post("http://localhost:3001/pokemon", payload);
    return res;
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/type");
      const typePokemon = res.data;
      dispatch({ type: GET_TYPES, payload: typePokemon });
    } catch (error) {
      console.log({ msg: error.message });
    }
  };
}

/***************************************************************/
//filtros por typo y base de datos funcionando
export function filterType(payload) {
  // console.log(payload);
  return {
    type: FILTER_POKEMONS_TYPES,
    payload,
  };
}
export function filterApiBdd(payload) {
  console.log(payload);
  return {
    type: FILTER_API_BDD,
    payload,
  };
}
/***************************************************************/

/***************************************************************/
//Ordenamiento accendente, por nombre y por ataque
export function orderAccDcc(payload) {
  // console.log(payload);
  return {
    type: ORDER_BY_ACC_DCC,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderAttack(payload) {
  // console.log(payload);
  return {
    type: ORDER_ATTACK,
    payload,
  };
}
