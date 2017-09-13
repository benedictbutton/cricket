import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import TwoPlayerField from '../components/TwoPlayerField';
import TeamsField from '../components/TeamsField';
import TeamLabel from '../components/TeamLabel';
import ExistingPlayerContainer from './ExistingPlayerContainer';

class GameFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'twoPlayer',
      playerOne: null,
      playerTwo: null,
      playerThree: '',
      playerFour: '',
      existingPlayer: [0,0,0,0],
      formPayload: {},
      data: [],
      messages: []
    };
    this.handleGameType = this.handleGameType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExistingPlayer = this.handleExistingPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewGame = this.addNewGame.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleExistingPlayer(id, name) {
    if(!this.state.playerOne) {
      let player = this.state.existingPlayer.slice();
      player[0] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerOne: name });
  }
    else if(!this.state.playerTwo) {
      let player = this.state.existingPlayer.slice();
      player[1] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerTwo: name });
    }
    else if(!this.state.playerThree) {
      let player = this.state.existingPlayer.slice();
      player[2] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerThree: name });
    }
    else {
      let player = this.state.existingPlayer.slice();
      player[3] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerFour: name });
    }
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

handleForm(name, player) {
  switch(name) {
    case 'playerOne':
      let playerOne = {playerOne: player};
      Object.assign(this.state.formPayload, playerOne);
      break;
    case 'playerTwo':
      let playerTwo = {playerTwo: player};
      Object.assign(this.state.formPayload, playerOne, playerTwo);
      break;
    case 'playerThree':
      let playerThree = {playerThree: player};
      Object.assign(this.state.formPayload, playerOne, playerTwo, playerThree);
      break;
    case 'playerFour':
      let playerFour = {playerFour: player};
      Object.assign(this.state.formPayload, playerOne, playerTwo, playerThree, playerFour);
      break;
    case 'gameType':
      let gameType = {gameType: player};
      Object.assign(this.state.formPayload, playerOne, playerTwo, playerThree, playerFour, gameType);
  }
}

 handleSubmit(event) {
    event.preventDefault();
    let player;
    for(let i=0; i < 5; i++) {
        switch(i) {
          case 0:
            let nameOne = 'playerOne';
              if(this.state.existingPlayer[i] === 0) {
              player = this.state.playerOne;
              this.setState({playerOne: player}, this.handleForm(nameOne, player));
             } else {
                player = this.state.existingPlayer[i];
                this.setState({playerOne: this.state.playerOne}, this.handleForm(nameOne, player));
          }
            break;
          case 1:
            let nameTwo = 'playerTwo';
            if(this.state.existingPlayer[i] === 0) {
              player = this.state.playerTwo;
              this.setState({playerTwo: player}, this.handleForm(nameTwo, player));
             } else {
                player = this.state.existingPlayer[i];
                this.setState({playerTwo: this.state.playerTwo},            this.handleForm(nameTwo, player));
          }
            break;
          case 2:
            let nameThree = 'playerThree';
            if(this.state.existingPlayer[i] === 0) {
              player = this.state.playerThree;
              this.setState({playerThree: player}, this.handleForm(nameThree, player));
             } else {
                player = this.state.existingPlayer[i];
                this.setState({playerThree: this.state.playerThree},            this.handleForm(nameThree, player));
          }
            break;
          case 3:
            let nameFour = 'playerFour';
            if(this.state.existingPlayer[i] === 0) {
              player = this.state.playerFour;
              this.setState({playerFour: player}, this.handleForm(nameFour, player));
             } else {
                player = this.state.existingPlayer[i];
                this.setState({playerFour: this.state.playerFour},            this.handleForm(nameFour, player));
          }
            break;
          case 4:
            let gameType = 'gameType';
            player = this.state.gameType;
            this.handleForm(gameType, player);
            break;
        }
      }
  this.addNewGame(this.state.formPayload);
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

      <ExistingPlayerContainer
      handleExistingPlayer={this.handleExistingPlayer} />

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
