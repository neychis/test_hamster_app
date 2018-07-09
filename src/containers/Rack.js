import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from '../components/Shelf';
import '../sass/rack.sass';

class Rack extends Component {
  constructor(props) {
    super(props);
    this.numberOfShelves = props.numberOfShelves;
    this.storedHamsters = props.storedHamsters;
    this.setCurrentShelf = props.setCurrentShelf;
  }

  renderShelves() {
    const shelves = [];
    for (let i = 0; i < this.numberOfShelves; i++) {
      /*shelves.push(Shelf({
        key: i,
        hamsters: this.storedHamsters,
        setCurrentShelf: (key) => this.setCurrentShelf(key)
      }));*/
      shelves.push(<Shelf
        key={i}
        hamsters={this.storedHamsters}
        setCurrentShelf={ key => this.setCurrentShelf(key) }
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
  setCurrentShelf: PropTypes.func,
};

export default Rack;
