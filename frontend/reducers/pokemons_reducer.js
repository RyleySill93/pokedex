import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemons;
    default:
      return state;
  }
};

export default pokemonsReducer;
