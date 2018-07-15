import React from 'react';
import PropTypes from 'prop-types';
import hamsterIcon from '../statics/cute-hamster-50px.png'

const Hamster = (key, onHamsterDrop) => {
  onHamsterDrop = (e, movedHamsterId) => {
    e.preventDefault();
    onHamsterDrop(movedHamsterId);
  };

  return (<div
      draggable='true'
      onDragOver={ e => e.preventDefault() }
      onDrop={ e => this.onHamsterDrop(e, key) }
    >
      <img src={hamsterIcon} alt={`hamster ${key}`}/>
    </div>
  );
}

Hamster.propTypes = {
  onHamsterDrop: PropTypes.func,
}

export default Hamster;
