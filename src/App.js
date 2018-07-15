import React, { Component } from 'react';
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack';
import './sass/main.sass';

class App extends Component {
  constructor(props) {
    const numberOfHamsters = 3;
    const numberOfShelves = 5;
    const defaultShelfId = -1;
    const hamsters = [];

    for(let i = 0; i < numberOfHamsters; i++) {
      hamsters.push({
        id: i,
        shelfId: defaultShelfId,
      });
    };

    super(props);

    this.state = {
      currentShelfId: defaultShelfId,
      defaultShelfId: defaultShelfId,
      hamsters: [...hamsters],
      numberOfShelvesAtTheRack: numberOfShelves,
      numberOfHamsters: numberOfHamsters,
    };
  }

  getStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId !== -1);
  getNotStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId === -1);

  render() {
  return (<div className='mainContainer'>
      <HamsterField
        hamsters={ this.getNotStoredHamsters() }
        onHamsterDrop={ this.changeHamsterState }
        setCurrentShelfIdDefault={ this.setCurrentShelfIdDefault }
      />
      <Rack numberOfShelves={ this.state.numberOfShelvesAtTheRack }
        storedHamsters={ this.getStoredHamsters() }
        setCurrentShelf={ this.setCurrentShelf }
        onHamsterDrop={ this.changeHamsterState }
      />
    </div>);
  }

  setCurrentShelf = shelfId => {
    const newState = { ...this.state };
    newState.currentShelfId = shelfId;
    this.setState(newState);
  };

  setCurrentShelfIdDefault = () => this.setCurrentShelf(this.state.defaultShelfId);

  changeHamsterState = movedHamsterId => {
    const newState = { ...this.state };
    const id = newState.hamsters.filter(hamster => hamster.id === movedHamsterId);
    newState.hamsters[id] = {
      id: movedHamsterId,
      shelfId: newState.currentShelfId
    };
    this.setState(newState);
  };
}

export default App;
