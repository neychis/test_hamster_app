import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamster from './Hamster';

class Shelf extends Component {
  constructor(props){
    super(props);

    this.id = props.id;
    this.hamsters = props.hamsters;
    this.onHamsterDrop = props.onHamsterDrop;
    this.setCurrentShelf = props.setCurrentShelf;
  }

  onDragOver = (e) => {
    e.preventDefault();
    this.setCurrentShelf(this.id);
  };

  getHamsters = () => {
    return this.hamsters.map(hamster => <Hamster
      key={ hamster.id }
      onHamsterDrop={ this.onHamsterDrop }
    />);
  };

  render() {
    return (<div key={ this.key } onDragOver={ this.onDragOver } >
     { this.getHamsters() }
    </div>);
  }
};

Shelf.propTypes = {
  id: PropTypes.number,
  hamsters: PropTypes.array,
  onHamsterDrop: PropTypes.func,
  setCurrentShelf: PropTypes.func,
}

export default Shelf;
