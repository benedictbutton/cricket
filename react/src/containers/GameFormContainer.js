import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import TwoPlayerField from '../components/TwoPlayerField';
import TeamsField from '../components/TeamsField';
import TeamLabel from '../components/TeamLabel';

class GameFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'twoPlayer',
      playerOne: '',
      playerTwo: '',
      playerThree: '',
      playerFour: '',
      data: [],
      messages: []
    };

    this.handleGameType = this.handleGameType.bind(this);
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
    fetch('/api/v1/games.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

handleGameType(event) {
  this.setState ({ gameType: event.target.value  });
}

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      playerOne: this.state.playerOne,
      playerTwo: this.state.playerTwo,
      playerThree: this.state.playerThree,
      playerFour: this.state.playerFour,
      gameType: this.state.gameType
    };
    this.addNewGame(formPayload);
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <label>Select Game Type
        <select value={this.state.value} onChange={this.handleGameType}>
          <option value='twoPlayer'>Two Player</option>
          <option value='teams'>Teams</option>
        </select>
      </label>

    <div className="row">
      <TeamLabel gameType={this.state.gameType} team='One'/>
    </div>

    <div className="row">
      <TwoPlayerField
      player={this.state.playerOne}
      handleChange={this.handleChange}
      label={'Player 1'}
      name={'playerOne'}
      />

      <TwoPlayerField
      player={this.state.playerTwo}
      handleChange={this.handleChange}
      label={'Player 2'}
      name={'playerTwo'}
      />
    </div>

    <div className="row">
      <TeamLabel gameType={this.state.gameType} team='Two'/>
    </div>

    <div className="row">
       <TeamsField
       gameType={this.state.gameType}
       player={this.state.playerThree}
       handleChange={this.handleChange}
       label={'Player 3'}
       name={'playerThree'}
        />

        <TeamsField
        gameType={this.state.gameType}
        player={this.state.playerFour}
        handleChange={this.handleChange}
        label={'Player 4'}
        name={'playerFour'}
         />
      </div>

      <button className="button" type="submit" value="Submit">Submit</button>
    </form>
    )
  }
}

export default GameFormContainer;
