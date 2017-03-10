import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemons => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon().then(pokes => dispatch(receiveAllPokemon(pokes)))
);

export const requestSinglePokemon = (pokemonId) => dispatch => (
  APIUtil.fetchSinglePokemon(pokemonId).then(poke => dispatch(receiveSinglePokemon(poke)))
);
