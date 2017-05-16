import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PlayerField from '../components/PlayerField';

class PlayerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
      players: [],
      message: []
    };
    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleName(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;
  this.setState({ [name]: value });
}

handleSubmit(event) {
  event.preventDefault();
  let formPayload = {
    players: { playerOne: this.state.playerOne,
    playerTwo: this.state.playerTwo },
    gameId: this.props.params.id
  };
  this.addPlayer(formPayload);
}

addPlayer(formPayload) {
    fetch('/api/v1/players', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ name: responseData });
      let gameId = responseData.id;
      let path = `/games/${gameId}`;
      browserHistory.push(path);
    })
  }

  render() {
    return(
        <PlayerField
        playerOne={this.state.playerOne}
        playerTwo={this.state.playerTwo}
        handleName={this.handleName}
        handleSubmit={this.handleSubmit}
        />
      )
  }
}

export default PlayerFormContainer;
