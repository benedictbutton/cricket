import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ExistingPlayer from '../components/ExistingPlayer';

class ExistingPlayerContainer extends Component {
  constructor(props) {
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
      let id = player.id;
      let playerName = player.name;
      return (
         <ExistingPlayer
            key={id}
            id={id}
            playerName={playerName}
            handleExistingPlayer={this.props.handleExistingPlayer}
          />
      )
    });

    return(
      <ul className="dropdown menu" data-dropdown-menu>
       <li>
       <a className="player-menu" href="#"> or Choose Existing Player</a>
       <ul className="menu">
         {players}
       </ul>
       </li>
       </ul>

      )
  }
}

export default ExistingPlayerContainer;
