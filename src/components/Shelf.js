import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamster from './Hamster';

class Shelf extends Component {
  constructor(props){
    super(props);
    this.setCurrentShelf = props.setCurrentShelf;
    this.hamsters = props.hamsters;
  }

  onDragOver = (e) => {
    e.preventDefault();
    this.setCurrentShelf(this.key);
  };

  getHamsters = () => {
    return this.hamsters.map(hamster => <Hamster
      key={hamster.id}
      onHamsterDrop={ (e, key) => { console.log(key) } }
    />);
  };

  render() {
    return (<div key={this.key} onDragOver={ e => this.onDragOver(e) } >
     { this.getHamsters() }
    </div>);
  }
};

Shelf.propTypes = {
  setCurrentShelf: PropTypes.fun,
  hamsters: PropTypes.array,
}

export default Shelf;
