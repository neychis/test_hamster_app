import React, { Component } from 'react';
import Constants from './Constants'
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack';
import './sass/main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    const hamsters = [];
    for(let i = 0; i < Constants.numberOfHamsters; i++) {
      hamsters.push({ id: i });
    };

    this.state = { hamsters: [...hamsters] };
  }

  componentDidMount() {
    document.body.addEventListener(Constants.pickHamsterEventName, this.setCurrentHamsterId);
  }

  componentWillUnmount() {
    document.body.removeEventListener(Constants.pickHamsterEventName, this.setCurrentHamsterId);
  }

  getStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId !== undefined);
  getNotStoredHamsters = () => this.state.hamsters.filter(hamster => hamster.shelfId === undefined);

  render() {
  return (<div className='mainContainer'>
      <HamsterField
        getHamsters={ this.getNotStoredHamsters }
        onHamsterDrop={ this.changeCurrentHamsterState }
      />
      <Rack
        getStoredHamsters={ this.getStoredHamsters }
        onHamsterDrop={ this.changeCurrentHamsterState }
      />
    </div>);
  }

  setCurrentHamsterId = event => {
    const newState = { ...this.state };
    newState.currentHamsterId = event.detail.id;
    this.setState(newState);
  };

  changeCurrentHamsterState = shelfId => {
    const newState = { ...this.state };
    const hamster = newState.hamsters.filter(hamster => hamster.id === this.state.currentHamsterId)[0];
    const id = hamster.id;
    if (newState.hamsters[id]) {
      newState.hamsters[id] = {
        id: newState.currentHamsterId,
        shelfId: shelfId,
      };

      this.setState(newState);
    }
  };
}

export default App;
