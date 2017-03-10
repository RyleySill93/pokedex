import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectSingleItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectSingleItem(state.pokemon.items, ownProps.params.itemId)
});

export default connect(mapStateToProps, null)(ItemDetail);
