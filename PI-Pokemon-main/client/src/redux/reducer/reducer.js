import {
  GET_POKEMONS,
  GET_POKEMONS_ID,
  FILTER_POKEMONS_TYPES,
  GET_POKEMONSNAME,
} from "../action/action-types";

const initialState = {
  pokemons: [],
  pokemonId: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMONS_ID:
      return {
        ...state,
        pokemonId: action.payload,
      };
    case FILTER_POKEMONS_TYPES:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMONSNAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
