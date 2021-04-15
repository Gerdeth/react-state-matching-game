import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      numTiles: 36,
      playing: false,
      previousTileIndex:null,
      tiles:[],
      toBeCleared:null

    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel data={this.state.playing, this.state.numTiles} />
        <Board data={this.state.tiles, this.state.numTiles} />
      }
    </div>
  );

  }
}

export default App;
