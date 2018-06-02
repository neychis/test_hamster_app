import React, { Component } from 'react';
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack'
import './css/main.css'

class App extends Component {
  render() {
    return (
        <div className='mainContainer'>
          <HamsterField />
          <Rack numberOfRows={5}/>
        </div>
    );
  }
}

export default App;
