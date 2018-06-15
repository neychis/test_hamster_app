import React from 'react';
import PropTypes from 'prop-types';
import hamsterIcon from '../statics/cute-hamster-50px.png'

const Hamster = (onHamsterDrop, onDragOver, key) => {
  return (<div
      draggable='true'
      onDragOver={(e)=>e.preventDefault()}
      onDrop={(e)=>{onHamsterDrop(key, e)}}
    >
      <img src={hamsterIcon} alt='{`hamster ${key}`}'/>
    </div>
  );
}
Hamster.propTypes = {
  //onHamsterDrop: PropTypes.func,
  //onDragOver: PropTypes.func,
}

export default Hamster;
