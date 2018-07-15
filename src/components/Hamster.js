import React from 'react';
import PropTypes from 'prop-types';
import hamsterIcon from '../statics/cute-hamster-50px.png'

const Hamster = (key, onHamsterDrop) => {
  const onDrop = (e) => {
    e.preventDefault();
    onHamsterDrop(key);
  };

  return (<div
      draggable='true'
      onDragOver={ e => e.preventDefault() }
      onDrop={ this.onDrop }
    >
      <img src={hamsterIcon} alt={`hamster ${key}`}/>
    </div>
  );
}

Hamster.propTypes = {
  onHamsterDrop: PropTypes.func,
}

export default Hamster;
