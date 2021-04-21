import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board';
import {createTiles, indexOfSelected} from '../../misc/utils';

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

  handleTileClicked=(id, color)=>{
    this.setState((state)=>{
      const tiles= state.tiles
      let toBeCleared= state.toBeCleared
      const selectedTileIndex =indexOfSelected(tiles,id,color)
      let previousTileIndex= state.previousTileIndex
      if(previousTileIndex !==null){
        const previousTileIndex = tiles[previousTileIndex]
        const selectedTileIndex = tiles [previousTileIndex]
        if(previousTile.id!==selectedTile.id && previousTile.color===color){
          selectedTile.matched=true
          previousTile.matched = true
          previousTileIndex = null
        } else {toBeCleared=[previousTileIndex,selectedTileIndex]
          previousTileIndex=null

        }
       } else { previousTileIndex = selectedTileIndex
      }

      return{toBeCleared,tiles,previousTileIndex}
      
    })
  }
  startGame(numTiles){
    this.setState((state)=>({
      playing:true,
      previousTileIndex: null,
      toBeCleared:null,
      tiles: createTiles(state.numTiles)

    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame} />
        <Board tiles={this.state.tiles} numTiles={this.state.numTiles} />
      
    </div>
  );

  }
  
}

export default App;
