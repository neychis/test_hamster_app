import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamster from '../components/Hamster';
import '../sass/hamsterField.sass';

class HamsterField extends Component{
  constructor(props){
    super(props);
    this.hamsters = props.hamsters;
    this.onHamsterDrop = props.onHamsterDrop;
    this.setCurrentShelfIdDefault = props.setCurrentShelfIdDefault;
  }

  onDragOver = e => {
    e.preventDefault();
    this.setCurrentShelfIdDefault();
  }

  render() {
    return (<div
      className='hamsterField'
      onDragOver={ this.onDragOver }
    >{
      this.hamsters.map(hamster => <Hamster
        key={hamster.id}
        onHamsterDrop={ this.onHamsterDrop }
      />)
    }</div>);
  }
};

HamsterField.propTypes = {
  hamsters: PropTypes.array,
  onHamsterDrop: PropTypes.func,
  setCurrentShelfIdDefault: PropTypes.func,
}

export default HamsterField;
