import { connect } from 'react-redux';
import { selectAllItems } from '../../reducers/selectors';
import ItemIndex from './item_index';

const mapStateToProps = (state) => {
  return ({
    items: selectAllItems(state.pokemon)
  });
};

export default connect (mapStateToProps, null)(ItemIndex);
