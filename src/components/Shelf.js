import React from 'react';
import PropTypes from 'prop-types';
import Hamster from './Hamster';

const Shelf = props => {
  const getHamsters = () => props.getHamsters(props.id).map(hamster => <Hamster
    key={ hamster.id }
    id={ hamster.id }
  />);

  return  (<div key={ props.id }
    onDragOver={ e => e.preventDefault() }
    onDrop={ e => props.onHamsterDrop(props.id) }
  >
    { getHamsters() }
  </div>);
};

Shelf.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    getHamsters: PropTypes.func,
    onHamsterDrop: PropTypes.func,
  })
}

export default Shelf;
