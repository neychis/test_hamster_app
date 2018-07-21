import React, { Component } from 'react';
import Constants from './Constants'
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack';
import './sass/main.sass';

class App extends Component {
  constructor(props) {
    const hamsters = [];

    for(let i = 0; i < Constants.numberOfHamsters; i++) {
      hamsters.push({
        id: i,
        shelfId: Constants.defaultShelfId,
      });
    };

    super(props);

    this.state = {
      currentHamsterId: undefined,
      currentShelfId: Constants.defaultShelfId,
      hamsters: [...hamsters],
      numberOfHamsters: Constants.numberOfHamsters,
    };
  }

  getStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId !== -1);
  getNotStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId === -1);

  render() {
  return (<div className='mainContainer'>
      <HamsterField
        hamsters={ this.getNotStoredHamsters() }
        onHamsterDrop={ this.changeCurrentHamsterState }
      />
      <Rack
        storedHamsters={ this.getStoredHamsters() }
        onHamsterDrop={ this.changeCurrentHamsterState }
      />
    </div>);
  }

  setCurrentHamsterId = hamsterId => {
    const newState = { ...this.state };
    newState.currentHamsterId = hamsterId;
    this.setState(newState);
    console.log(hamsterId);
  };

  changeCurrentHamsterState = shelfId => {
    const newState = { ...this.state };
    const id = newState.hamsters.filter(hamster => hamster.id === this.state.currentHamsterId);
    if (newState.hamsters[id]) {
      newState.hamsters[id] = {
        id: newState.currentHamsterId,
        shelfId: shelfId || Constants.defaultShelfId,
      };

      this.setState(newState);
    }
    console.log(`changed hamster state ${newState.hamsters[id].id} -> ${newState.hamsters[id].shelfId}`)
  };
}

export default App;
