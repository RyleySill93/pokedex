import React from 'react';
import {Link} from 'react-router';

const PokemonIndexItem = ({ poke }) => {
  return (
    <li className="pokemon-index-item">
      <Link to={ `/pokemon/${poke.id}` }>
        <span>{ poke.id } </span>
        <img src={ poke.image_url } width="20px" height="20px"/>
        <span> { poke.name }</span>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
