import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from '../components/Shelf';
import '../sass/rack.sass';

class Rack extends Component {
  constructor(props) {
    super(props);

    this.numberOfShelves = props.numberOfShelves;
    this.onHamsterDrop = props.onHamsterDrop;
    this.storedHamsters = props.storedHamsters;
    this.setCurrentShelf = props.setCurrentShelf;
  }

  renderShelves() {
    const shelves = [];
    for (let i = 0; i < this.numberOfShelves; i++) {
      shelves.push(<Shelf
        key={ i }
        id={ i }
        hamsters={ this.storedHamsters.filter(hamster => hamster.shelfId === i) }
        setCurrentShelf={ this.setCurrentShelf }
        onHamsterDrop={ this.onHamsterDrop }
      />);
    }
    return shelves;
  };

  render() {
    return (<div className='rack'>{ this.renderShelves() }</div>);
  }
}

Rack.propTypes = {
  numberOfShelves: PropTypes.number,
  onHamsterDrop: PropTypes.func,
  storedHamsters: PropTypes.array,
  setCurrentShelf: PropTypes.func,
};

export default Rack;
