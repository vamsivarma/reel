import React, { Component } from 'react';
import TouristListItem from './TouristListItem';

class TouristList extends Component {
  render() {
    const { Tourists, onTouristOpen, deleteTourist } = this.props;
    return (
      <div>
        <h1>Tourist List</h1>
        {Tourists.map(Tourist => (
          <TouristListItem
            key={Tourist.id}
            Tourist={Tourist}
            onTouristOpen={onTouristOpen}
            deleteTourist={deleteTourist}
          />
        ))}
      </div>
    );
  }
}

export default TouristList;
