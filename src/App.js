import React, { Component } from 'react';
import HamsterField from './containers/HamsterField';
import Rack from './containers/Rack';
import './css/main.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            toys: [],
            numberOfShelvesAtTheRack: 5,
        };
        this.changeTheToyState.bind(this);
    }

    changeTheToyState(toyId){
        //TODO get the toy from array and change its position and then app state
    }

    render() {
    return (
            <div className='mainContainer'>
              <HamsterField toys={this.state.toys} onToyDrop={this.changeTheToyState}/>
              <Rack numberOfShelves={this.state.numberOfShelvesAtTheRack}/>
            </div>);
    }
}

export default App;
