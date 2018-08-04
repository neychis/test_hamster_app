import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../Constants'
import Shelf from '../components/Shelf';
import '../sass/rack.scss';

const Rack = props => {
  const getHamstersForCurrentShelf = shelfId => props.getStoredHamsters()
    .filter(hamster => hamster.shelfId === shelfId);

  const renderShelves = () => {
    const shelves = [];
    for (let i = 0; i < Constants.numberOfShelves; i++) {
      shelves.push(<Shelf
        key={ i }
        id={ i }
        getHamsters={ getHamstersForCurrentShelf }
        onHamsterDrop={ props.onHamsterDrop }
      />);
    }
    return shelves;
  };

  return (<div className='rack' children={ renderShelves() } />);
}

Rack.propTypes = {
  props: PropTypes.shape({
    onHamsterDrop: PropTypes.func,
    getStoredHamsters: PropTypes.func,
  })
};

export default Rack;
