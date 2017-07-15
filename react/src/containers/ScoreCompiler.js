import React, { Component } from 'react';
import ScoreContainer from './ScoreContainer';
import SaveAlert from '../components/SaveAlert';

class ScoreCompiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
    scores: [],
    playerOne: '',
    playerTwo: '',
    message: null
  };
  this.updateHits = this.updateHits.bind(this);
  this.handleSave = this.handleSave.bind(this);
  this.confirmSave = this.confirmSave.bind(this);
  this.assignPlayerOne = this.assignPlayerOne.bind(this);
  this.assignPlayerTwo = this.assignPlayerTwo.bind(this)
}

  componentDidMount() {
      let gameId = this.props.params.id;
      fetch(`/api/v1/scores/${gameId}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ scores: responseData.game });
      });
    }

    updateHits(id, hits) {
      if(hits < 3) {
        this.state.scores[id].hits += 1;
      }
      else {
        this.state.scores[id].hits -= 3;
      }
      this.setState(this.state);
    }

  handleSave (event) {
    event.preventDefault();
    const updatedHitsAttribute = [...this.state.scores];

  // if(updatedHitsAttribute[id].hits < 3) {
  //   updatedHitsAttribute[id].hits = this.state.scores[id].hits + 1;
  // }
  // else{
  //     updatedHitsAttribute[id].hits = this.state.scores[id].hits-3;
  //   }

  fetch(`/api/v1/scores/${this.props.params.id}`, {
    credentials: 'same-origin',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedHitsAttribute)
  })
  .then(response => response.json())
  .then(responseData => {
    this.setState({ scores: responseData.scores, message: responseData.message });
  });
}

assignPlayerOne(players) {
  let playerOne;
  if(players.length === 4) {
    playerOne = `${players[0].player_name}/${players[1].player_name}`;
  }
  if(players.length === 2) {
    playerOne = `${players[0].player_name}`;
  }
    return playerOne;
}

assignPlayerTwo(players) {
  let playerTwo;
  if(players.length === 4) {
    playerTwo = `${players[2].player_name}/${players[3].player_name}`;
  }
  if(players.length === 2) {
    playerTwo = players[1].player_name;
  }
    return playerTwo;
}

confirmSave() {
  this.setState({ message: null });
}

render() {
  return(
    <div>
      {this.state.message && <SaveAlert message={this.state.message} confirmSave={this.confirmSave} />
     }
    <div>
      <ScoreContainer
      scores={this.state.scores}
      gameType={this.state.gameType}
      updateHits={this.updateHits}
      handleSave={this.handleSave}
      assignPlayerOne={this.assignPlayerOne}
      assignPlayerTwo={this.assignPlayerTwo}
       />
    </div>
    </div>
  )
}
}


export default ScoreCompiler;
