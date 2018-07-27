import React from 'react';
import PropTypes from 'prop-types';
import hamsterIcon from '../statics/cute-hamster-50px.png'

const Hamster = id => {
  const onDrop = (e) => {
    e.preventDefault();
  };

  const onDragStart = e => {
    e.preventDefault();
    console.log(`on drag start ${id}`);
    //fire custom event to set currentHamsterId
  };

  return (<div
      draggable='true'
      onDragStart={ onDragStart }
      onDragEnd={ onDrop }
    >
      <img src={ hamsterIcon } alt={`hamster ${id}`}/>
    </div>
  );
}

Hamster.propTypes = {
  id: PropTypes.number,
}

export default Hamster;
