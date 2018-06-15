import React, { Component } from 'react';
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack';
import './sass/main.sass';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notStoredHamsters: [0, 1, 2],
      storedHamsters: {},
      numberOfShelvesAtTheRack: 5,
    };
    this.changeHamsterState.bind(this);
  }

  changeHamsterState(movedHamsterId, shelfId = -1){
    //TODO get the toy from array and change its position and then app state
    const newState = {...this.state};
    const indexOfHamster = this.state.notStoredHamsters.indexOf(movedHamsterId);
    if (indexOfHamster !== -1 && shelfId > -1 ){
      newState.notStoredHamsters = newState.notStoredHamsters.filter(hamsterId =>
        hamsterId !== movedHamsterId);
    }
    else if (shelfId === -1){
      newState.notStoredHamsters.push(movedHamsterId);
    }
    this.setState(newState);
  }

  render() {
  return (<div className='mainContainer'>
      <HamsterField
        hamsters={this.state.notStoredHamsters}
        onHamsterDrop={this.changeHamsterState}
      />
      <Rack numberOfShelves={this.state.numberOfShelvesAtTheRack}/>
    </div>);
  }
}

export default App;
