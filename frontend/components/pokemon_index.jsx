import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndexItem from './pokemon/pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    const list = this.props.pokemons.map( poke => (
      <PokemonIndexItem poke={poke} key={poke.id}/>
    ));

    return (
      <section className="pokedex">
        <ul>
          { list }
        </ul>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonIndex;
