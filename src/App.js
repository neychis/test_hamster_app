import React, { Component } from 'react';
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack';
import './sass/main.sass';

class App extends Component {
  constructor(props) {
    const numberOfHamsters = 3;
    const numberOfShelves = 5;
    const currentShelfId = -1;
    const hamsters = [];
    for(let i = 0; i < numberOfHamsters; i++) {
      hamsters.push({
        id: i,
        shelfId: currentShelfId,
      });
    };

    super(props);
    this.state = {
      currentShelfId: currentShelfId,
      hamsters: [...hamsters],
      numberOfShelvesAtTheRack: numberOfShelves,
      numberOfHamsters: numberOfHamsters,
    };
  }

  setCurrentShelf = (shelfId = -1) => {
    const newState = {...this.state};
    newState.currentShelfId = shelfId;
    this.setState(newState);
  };
  changeHamsterState = (movedHamsterId) => {
    const newState = {...this.state};
    const id = newState.hamsters.filter(hamster => hamster.id === movedHamsterId);
    newState.hamsters[id] = {
      id: movedHamsterId,
      shelfId: newState.currentShelfId
    };
    this.setState(newState);
  };
  getStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId !== -1);
  getNotStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId === -1);

  render() {
  return (<div className='mainContainer'>
      <HamsterField
        hamsters={ this.getNotStoredHamsters() }
        onHamsterDrop={ movedHamsterId => this.changeHamsterState(movedHamsterId) }
      />
      <Rack numberOfShelves={ this.state.numberOfShelvesAtTheRack }
        storedHamsters={ this.getStoredHamsters() }
        setCurrentShelf={ key => this.setCurrentShelf(key) }
      />
    </div>);
  }
}

export default App;
