import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PlayerShow from '../components/PlayerShow';
import GameIndex from '../components/GameIndex';

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
      let title = record.title;
      let id =  record.id;
      playerName = this.state.playerRecord.name;
      let dateString = Date.parse(record.created_at);
      let d = new Date(dateString);
      let date = d.toDateString();

      return(
      <GameIndex
      key={id}
      id={id}
      title={title}
      date={date}
      />
    )
    });

  return(
    <div>
      <h1 className="player-name">{playerName}</h1>
      <div className="game">{games}</div>
      </div>
    );
  }
}

export default PlayerShowContainer;
