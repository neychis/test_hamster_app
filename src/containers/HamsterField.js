import React from 'react'
import Toy from '../components/Toy'
import teddy from '../statics/teddy-bear.svg'
import '../css/hamsterField.css'

const HamsterField = () => {
  return (<div className='hamsterField'>
    <Toy src={teddy} />
  </div>)
}

export default HamsterField
