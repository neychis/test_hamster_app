import React from 'react'

//isFull set here not to forget to implement a full state of the Shelf
//toys will be stored on react state and only passed here
const Shelf = (toys = [], isFull = false) => {
    return (<div>{toys}</div>)
}

export default Shelf
