import React from 'react';

//TODO don't forget to implement a full state of the Shelf
const Shelf = (key = 0, toys = []) => {
  return (<div
      key={key}
      onDragOver={e => e.preventDefault()}
    >
      {toys}
    </div>
  );
}

export default Shelf;
