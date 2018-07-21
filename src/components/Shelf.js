import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamster from './Hamster';

class Shelf extends Component {
  constructor(props){
    super(props);

    this.id = props.id;
    this.hamsters = props.hamsters;
    this.onHamsterDrop = props.onHamsterDrop;
  }

  getHamsters = () => {
    return this.hamsters.map(hamster => <Hamster
      key={ hamster.id }
      id={ hamster.id }
    />);
  };

  render() {
    return (<div key={ this.id }
      onDragOver={ e => e.preventDefault() }
      onDrop={ e => this.onHamsterDrop(this.id) }
    >
     { this.getHamsters() }
    </div>);
  }
};

Shelf.propTypes = {
  id: PropTypes.number,
  hamsters: PropTypes.array,
  onHamsterDrop: PropTypes.func,
}

export default Shelf;
