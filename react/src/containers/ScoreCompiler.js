import React, { Component } from 'react';
import ScoreContainer from './ScoreContainer';
import SaveAlert from '../components/SaveAlert';
import DeleteAlert from '../components/DeleteAlert';

class ScoreCompiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
    scores: [],
    playerOne: '',
    playerTwo: '',
    message: null,
    alert: null
  };
  this.updateHits = this.updateHits.bind(this);
  this.handleSave = this.handleSave.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.confirmSave = this.confirmSave.bind(this);
  this.confirmDelete = this.confirmDelete.bind(this);
  this.assignPlayerOne = this.assignPlayerOne.bind(this);
  this.assignPlayerTwo = this.assignPlayerTwo.bind(this);
}

  componentDidMount() {
      let gameId = this.props.match.params.id;
      fetch(`/api/v1/scores/${gameId}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ scores: responseData.game });
      });
    }

    updateHits(obj) {
      let num = obj.id;
      let noPoints = () => {
        this.setState((prevState) => {
          if(!obj.points && obj.hits>=3) {
            return {
              ...prevState, scores: Object.assign([...prevState.scores], {[num]: {...prevState.scores[num], hits: prevState.scores[num].hits - 3} })
              }
            }
          return {
            ...prevState, scores: Object.assign([...prevState.scores], {[num]: {...prevState.scores[num], hits: prevState.scores[num].hits + 1} })
            }
          }, () => {
              console.log('completed');
            });
          }

          noPoints(obj);
    };

    //   let pointHits = (obj) => {
    //     (hits>3) ? markedHits(obj.id, obj.hits) :  this.state.scores[id].hits += this.state.scores[id]*hits;
    //     this.setState(this.state);
    //     this.handlePointDisplay(hits);
    // };



      // let hits = markedHits(obj);

      // (obj.hits<3) ? markedHits(obj) : pointHits(obj);
  // }

  handleSave (event) {
    event.preventDefault();
    const updatedHitsAttribute = [...this.state.scores];

  // if(updatedHitsAttribute[id].hits < 3) {
  //   updatedHitsAttribute[id].hits = this.state.scores[id].hits + 1;
  // }
  // else{
  //     updatedHitsAttribute[id].hits = this.state.scores[id].hits-3;
  //   }

  fetch(`/api/v1/scores/${this.props.match.params.id}`, {
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

handleDelete(event) {
  fetch(`/api/v1/games/${this.props.match.params.id}`, {
    credentials: 'same-origin',
    method: 'DELETE'
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      console.log('error');
    }
    })
  .then(responseData => {
    this.setState({ alert: responseData.alert });
    let path = '/games';
    browserHistory.push(path);
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

confirmDelete() {
  this.setState({ alert: null });
}

render() {
  return(
    <div>
      {this.state.message && <SaveAlert message={this.state.message} confirmSave={this.confirmSave} />
     }

     {this.state.alert && <DeleteAlert
     alert={this.props.alert}
     confirmDelete={this.confirmDelete} />
   }

    <div>
      <ScoreContainer
      scores={this.state.scores}
      gameType={this.state.gameType}
      updateHits={this.updateHits}
      handleSave={this.handleSave}
      handleDelete={this.handleDelete}
      assignPlayerOne={this.assignPlayerOne}
      assignPlayerTwo={this.assignPlayerTwo}
       />
    </div>
    </div>
  )
}
}

export default ScoreCompiler;
