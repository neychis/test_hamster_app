import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from '../Constants'
import Shelf from '../components/Shelf';
import '../sass/rack.sass';

class Rack extends Component {
  constructor(props) {
    super(props);

    this.onHamsterDrop = props.onHamsterDrop;
    this.storedHamsters = props.storedHamsters;
  }

  renderShelves() {
    const shelves = [];
    for (let i = 0; i < Constants.numberOfShelves; i++) {
      shelves.push(<Shelf
        key={ i }
        id={ i }
        hamsters={ this.storedHamsters.filter(hamster => hamster.shelfId === i) }
        onHamsterDrop={ this.onHamsterDrop }
      />);
    }
    return shelves;
  };

  render() {
    return (<div className='rack' > { this.renderShelves() } </div>);
  }
}

Rack.propTypes = {
  onHamsterDrop: PropTypes.func,
  storedHamsters: PropTypes.array,
};

export default Rack;
