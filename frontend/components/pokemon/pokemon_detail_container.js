import { connect } from 'react-redux';
import {requestSinglePokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectSinglePokemon } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    pokemon: state.pokemon
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
