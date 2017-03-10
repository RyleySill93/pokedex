import React from 'react';
import ItemIndexContainer from './item_index_container';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.requestSinglePokemon(newProps.params.id);
    }
  }

  render () {
    let {pokemon} = this.props;
    let items;

    if (pokemon.items) {
      items = <ItemIndexContainer/>;
    }
    return (
      <section className='pokemon-detail'>
        <img src={pokemon.image_url} />
        <ul>
          <li><h2>{ pokemon.name }</h2></li>
          <li>Type: { pokemon.type }</li>
          <li>Attack: { pokemon.attack }</li>
          <li>Defense: { pokemon.defense }</li>
          <li>Moves: { pokemon.moves ? pokemon.moves.join(", ") : "" }</li>
        </ul>
        <section className="toys">
          { items }
          { this.props.children }
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
