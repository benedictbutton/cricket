import React, { Component } from 'react';
import PlayerShow from '../components/PlayerShow';
import PlayerTile from '../components/PlayerTile';

class PlayerIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/players', {
        credentials: 'same-origin',
        method: 'GET',
      })
    .then(response => {
      let parsed = response.json();
      return parsed })
    .then (responseData => {
      this.setState({ players: responseData  });
    });
  }

  render() {
    let players = this.state.players.map(player => {
      let id = player.id
      let playerName = player.name
      return (
         <PlayerTile
            id={id}
            playerName={playerName}
          />

      )
    });
    return(
      <div className="row">
      <div className="small-8 small columns">
        <h1 className="players">Players</h1>
          {players}
      </div>
      </div>
    )
  }
}

export default PlayerIndexContainer;
