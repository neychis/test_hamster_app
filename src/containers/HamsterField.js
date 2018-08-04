import React from 'react';
import PropTypes from 'prop-types';
import Hamster from '../components/Hamster';
import '../sass/hamsterField.scss';

const HamsterField = props => {
  return (<div
    className='hamsterField'
    onDragOver={ e => e.preventDefault() }
    onDrop={ e => props.onHamsterDrop() }
  >{
    props.getHamsters().map(hamster => <Hamster
      key={ hamster.id }
      id={ hamster.id }
    />)
  }</div>);
};

HamsterField.propTypes = {
  props: PropTypes.shape({
    getHamsters: PropTypes.func.isRequired,
    onHamsterDrop: PropTypes.func.isRequired,
  })
}

export default HamsterField;
