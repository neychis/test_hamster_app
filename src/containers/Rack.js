import React, { Component } from 'react';
import Shelf from '../components/Shelf'
import '../css/rack.css'

class Rack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberofRows : props.numberOfRows
    };
  }

  renderShelves() {
    var shelves = []
    for (let i = 0; i < this.state.numberofRows; i++) {
      shelves.push(Shelf())
    }
    return shelves;
  };

  render() {
    return (<div className='rack'>{this.renderShelves()}</div>)
  }
}

export default Rack
