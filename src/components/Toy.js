import React from 'react';
import PropTypes from 'prop-types';

const Toy = (src, onToyDrop) => {
    return ( <img
        src={src}
        alt = 'toy'
        draggable='true'
    /> );
}
Toy.propTypes = {
    src: PropTypes.string,
}

export default Toy;
