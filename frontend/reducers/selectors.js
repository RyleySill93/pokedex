import values from 'lodash/values';

export const selectAllPokemon = state => (
  values(state.pokemons)
);

export const selectAllItems = ( {items }) => (
  values(items)
);

export const selectSingleItem = (items, id) => (
  values(items).find(item => (item.id == id))
);
