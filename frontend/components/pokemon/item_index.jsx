import React from 'react';
import ItemDetail from './item_detail';
import { Link } from 'react-router';

class ItemIndex extends React.Component {

  render () {
    // debugger
    let list = this.props.items.map((item, idx) =>
      <li key={idx}>
        <Link to={`pokemon/${item.pokemon_id}/item/${item.id}`} >
          <img src={item.image_url} width="1000px" height="100px" />
        </Link>
      </li>
    );
    return (
      <ul className="toy-list">
        {list}
      </ul>
    );
  }
}

export default ItemIndex;
