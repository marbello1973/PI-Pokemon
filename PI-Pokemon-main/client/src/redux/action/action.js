import axios from "axios";
import {
  GET_POKEMONS,
  SEARCH_BY_NAME,
  // GET_TYPES,
  // GET_POKEMONSNAME,
  // GET_POKEMONS_ID,
  FILTER_POKEMONS_TYPES,
} from "./action-types";

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemon");
      const pokemons = response.data;
      // console.log(pokemons);
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export function filterType(payload) {
  // console.log(payload);
  return {
    type: FILTER_POKEMONS_TYPES,
    payload,
  };
}

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

/* export function searchByName(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemon?name=${payload}`
      );
      const pokemonName = response.data;
      console.log(pokemonName);
      dispatch({
        type: SEARCH_BY_NAME,
        payload: pokemonName,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
} */

/* export function filterType() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemon");
      const types = response.data;
      console.log(types);
      dispatch({
        type: FILTER_POKEMONS_TYPES,
        payload: types.data,
      });
    } catch (error) {
      console.log({ msg: error.message });
    }
  };
} */

/* export function filterType(payload) {
  console.log(payload);
  return {
    type: FILTER_POKEMONS_TYPES,
    payload,
  };
} */

/*
export function getType() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/type");
      const types = response.data;
      return dispatch({
        type: GET_TYPES,
        payload: types.data,
      });
    } catch (error) {
      console.log({ msg: error.message });
    }
  };
}

*/
