import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamster from '../components/Hamster';
import '../sass/hamsterField.scss';

class HamsterField extends Component{
  constructor(props){
    super(props);
    this.hamsters = props.hamsters;
    this.onHamsterDrop = props.onHamsterDrop;
  }

  render() {
    return (<div
      className='hamsterField'
      onDragOver={ e => e.preventDefault() }
      onDrop={ e => this.onHamsterDrop() }
    >{
      this.hamsters.map(hamster => <Hamster
        key={hamster.id}
        id={ hamster.id }
      />)
    }</div>);
  }
};

HamsterField.propTypes = {
  hamsters: PropTypes.array,
  onHamsterDrop: PropTypes.func,
}

export default HamsterField;
