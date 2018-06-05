import React from 'react';
import PropTypes from 'prop-types';
import Toy from '../components/Toy';
import teddy from '../statics/teddy-bear.svg';
import '../css/hamsterField.css';

const HamsterField = (toys = {}, onToyDrop) => {
  return (<div className='hamsterField'>
    <Toy src={teddy} onToyDrop={onToyDrop}/>
  </div>);
}

HamsterField.propTypes = {
    toys: PropTypes.array,
    onToyDrop: PropTypes.fun,
}

export default HamsterField;
