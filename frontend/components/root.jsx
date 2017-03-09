import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon_index_container';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <PokemonIndexContainer />
    </Provider>
  );
};

export default Root;
