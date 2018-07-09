import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamster from '../components/Hamster';
import '../sass/hamsterField.sass';

class HamsterField extends Component{
  constructor(props){
    super(props);
    this.hamsters = props.hamsters;
    this.onHamsterDrop = props.onHamsterDrop;
  }

  render() {
    return (<div className='hamsterField'>{
      this.hamsters.map(hamster => <Hamster
        key={hamster.id}
        onHamsterDrop={ movedHamsterId => this.onHamsterDrop(movedHamsterId) }
      />)
    }</div>);
  }
};

HamsterField.propTypes = {
  hamsters: PropTypes.array,
  onHamsterDrop: PropTypes.fun,
}

export default HamsterField;
