import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PlayerShow from '../components/PlayerShow';

class PlayerShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerRecord: [],
      gameRecord: []
  };

}

  componentDidMount() {
    let playerId = this.props.params.id;
    fetch(`/api/v1/players/${playerId}`)
    .then(response => {
      let parsed = response.json();
      return parsed;
    })
    .then (responseData => {
      this.setState({ gameRecord:  responseData.games, playerRecord: responseData.player });
    });
  }

  render() {
    let playerName;
    let games = this.state.gameRecord.map(record => {
      let gameTitle = record.title;
      let gameId =  record.id;
      playerName = this.state.playerRecord.name;
      return(
      <PlayerShow
      gameTitle={gameTitle}
      gameId={gameId}
      />
    )
    });

  return(
    <div>
      <h1 className="player-name">{playerName}</h1>
        <ul>
        {games}
        </ul>
      </div>
    );
  }
}

export default PlayerShowContainer;
