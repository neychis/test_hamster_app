import React from 'react';
import PropTypes from 'prop-types';
import Hamster from '../components/Hamster';
import '../sass/hamsterField.sass';

const HamsterField = (hamsters = {}, onHamsterDrop) => {
  return (<div className='hamsterField'>
    <Hamster key={0} onHamsterDrop={onHamsterDrop} />
    <Hamster key={1} onHamsterDrop={onHamsterDrop} />
    <Hamster key={2} onHamsterDrop={onHamsterDrop} />
  </div>);
}

HamsterField.propTypes = {
  hamsters: PropTypes.array,
  onHamsterDrop: PropTypes.fun,
}

export default HamsterField;
