import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMONSNAME,
  GET_POKEMONS_ID,
  FILTER_POKEMONS_TYPES,
} from "./action-types";

export function getPokemons() {
  return async function (dispatch) {
    console.log(dispatch);
    const response = await axios.get("http://localhost:3001/pokemon");
    console.log(response.data);
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
}

/* export const getPokemons = (res) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/pokemon");
    dispatch({ type: GET_POKEMONS, payload: response.data });
    console.log(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; */
