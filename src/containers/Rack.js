import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from '../components/Shelf';
import '../sass/rack.sass';

class Rack extends Component {
  constructor(props) {
    super(props)
    this.numberOfShelves = props.numberOfShelves
  }

  renderShelves() {
    var shelves = []
    for (let i = 0; i < this.numberOfShelves; i++) {
      shelves.push(Shelf(i))
    }
    return shelves;
  };

  render() {
    return (<div className='rack'>{this.renderShelves()}</div>);
  }
}

Rack.propTypes = {
  numberOfShelves: PropTypes.number,
};

export default Rack;
