import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonDetailReducer
});

export default rootReducer;
