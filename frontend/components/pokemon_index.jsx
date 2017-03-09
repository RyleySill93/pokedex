import React from 'react';
import ReactDOM from 'react-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    const list = this.props.pokemons.map( poke => (
      <li className="pokemon-index-item">
        <a>
          <span>{ poke.id } </span>
          <img src={ poke.image_url } width="20px" height="20px"/>
          <span> { poke.name }</span>
        </a>
      </li>
    ));

    return (
      <section className="pokedex">
        <ul>
          { list }
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
