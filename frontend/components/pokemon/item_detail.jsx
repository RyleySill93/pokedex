import React from 'react';

class ItemDetail extends React.Component {

  render () {
    // debugger
    return (
      <ul>
        <li><h3>{this.props.item.name}</h3></li>
        <li>Happiness: { this.props.item.happiness }</li>
        <li>Price: { this.props.item.price }</li>
      </ul>
    );

  }
}

export default ItemDetail;
