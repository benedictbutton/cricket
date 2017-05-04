import React, { Component } from 'react';
import GameTile from '../components/GameTile';

class GameShowContainer extends Component {
  constructor(props) {
    super(props); {
    }
  }



render() {
  let choices = {
    twoPlayer: "Two Player",
    teams: "Teams"
  };

  return(
    <GameTile choices={choices}/>
  )
}
}

export default GameShowContainer;
