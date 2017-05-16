import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import GameField from '../components/GameField';

class GameFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
      data: [],
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewGame = this.addNewGame.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  addNewGame(formPayload) {
    fetch('/api/v1/games', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      let parsed = response.json();
      return parsed;
    })
    .then(responseData => {
      this.setState({ data: [...this.state.data, responseData] });
      let gameId = responseData.game;
      let path = `/games/${gameId}`;
      browserHistory.push(path);
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      playerOne: this.state.playerOne,
      playerTwo: this.state.playerTwo
    };
    this.addNewGame(formPayload);
  }




  render() {
    return(
      <GameField
      playerOne={this.state.playerOne}
      playerTwo={this.state.playerTwo}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default GameFormContainer;
