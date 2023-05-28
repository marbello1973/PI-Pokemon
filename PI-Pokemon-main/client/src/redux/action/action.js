import axios from "axios";
import {
  GET_POKEMONS,
  SEARCH_BY_NAME,
  FILTER_POKEMONS_TYPES,
  FILTER_API_BDD,
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

export function filterType(payload) {
  // console.log(payload);
  return {
    type: FILTER_POKEMONS_TYPES,
    payload,
  };
}

export function filterApiBdd(payload) {
  return {
    type: FILTER_API_BDD,
    payload,
  };
}
