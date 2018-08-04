import React from 'react';
import PropTypes from 'prop-types';
import hamsterIcon from '../statics/cute-hamster-50px.png'
import Constants from '../Constants';

const Hamster = props => {
  const onDrop = (e) => {
    e.preventDefault();
  };

  const onDragStart = e => {
    document.body.dispatchEvent(new CustomEvent(
      Constants.pickHamsterEventName, {
        detail: {
          id: props.id
        }
      }
    ));
  };

  return (<div name={`hamster ${props.id}`}
      draggable='true'
      onDragStart={ onDragStart }
      onDragEnd={ onDrop }
    >
      <img src={ hamsterIcon } alt={`hamster ${props.id}`}/>
    </div>
  );
}

Hamster.propTypes = {
  props: PropTypes.shape({ id: PropTypes.number })
}

export default Hamster;
