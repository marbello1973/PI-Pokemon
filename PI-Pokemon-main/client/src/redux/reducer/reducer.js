import {
  GET_POKEMONS,
  FILTER_POKEMONS_TYPES,
  SEARCH_BY_NAME,
  FILTER_API_BDD,
  ORDER_BY_ACC_DCC,
  ORDER_ATTACK,
  ORDER_BY_NAME,
  GET_POKEMONS_BY_ID,
  GET_TYPES,
  POST_POKEMONS,
} from "../action/action-types";

const initialState = {
  pokemons: [],
  allPokemons: [],
  pokemonID: [],
  pokemonType: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      // console.log(actiosn.payload);
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_POKEMONS_BY_ID:
      return {
        ...state,
        pokemonID: action.payload,
      };

    case POST_POKEMONS:
      return {
        ...state,
      };

    case GET_TYPES:
      return {
        ...state,
        pokemonType: action.payload,
      };

    case FILTER_POKEMONS_TYPES:
      const allPokemons = state.allPokemons;
      const typeFilter =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter((el) =>
              el.types.find((el) => el.name === action.payload)
            );
      // console.log(typeFilter);
      return {
        ...state,
        pokemons: typeFilter,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER_API_BDD:
      const pokemonApiBdd = state.allPokemons;
      const filterApiBdd =
        action.payload === "Bdd"
          ? pokemonApiBdd.filter((el) => el.createdDB)
          : pokemonApiBdd.filter((el) => !el.createdDB);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.allPokemons : filterApiBdd,
      };

    case ORDER_BY_ACC_DCC:
      const pokeNameOrder = state.pokemons;
      const mapped =
        pokeNameOrder &&
        pokeNameOrder.map((el, i) => {
          return { index: i, value: el };
        });
      const orderName =
        action.payload === "Acc"
          ? mapped.sort((a, b) => {
              if (a.index > b.index) {
                return 1;
              }
              if (a.index < b.index) {
                return -1;
              }
              return 0;
            })
          : mapped.sort((a, b) => {
              if (a.index > b.index) {
                return -1;
              }
              if (a.index < b.index) {
                return 1;
              }
              return 0;
            });
      console.log(orderName);
      return {
        ...state,
        pokemons:
          orderName /* action.paylaod !== "All" ? orderName : state.pokemons */,
      };

    case ORDER_BY_NAME:
      const pokeByName = state.pokemons;
      const orderByName =
        action.payload === "AZ"
          ? pokeByName.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : pokeByName.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      // console.log(orderByName);
      return {
        ...state,
        pokemons:
          orderByName /* action.paylaod === "ALl" ? state.pokemons : orderByName, */,
      };

    case ORDER_ATTACK:
      const orderAttack =
        action.payload === "min"
          ? (state.pokemons = state.pokemons.sort(
              (a, b) => a.attack - b.attack
            ))
          : (state.pokemons = state.pokemons.sort(
              (a, b) => b.attack - a.attack
            ));
      console.log(orderAttack);
      return {
        ...state,
        pokemons:
          orderAttack /* action.payload === "All" ? state.allPokemons : orderAttack, */,
      };

    default:
      return state;
  }
};

export default rootReducer;

/* pokemons: [
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
  ],
  */

/*
  
  
   */
