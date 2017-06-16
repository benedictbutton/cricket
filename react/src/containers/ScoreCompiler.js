import React, { Component } from 'react';
import ScoreContainer from './ScoreContainer';

class ScoreCompiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
    scores: []
  };
  this.updateHits = this.updateHits.bind(this);
  this.handleSave = this.handleSave.bind(this);
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
    debugger;
    this.setState({ scores: responseData.scores });
    debugger;
  });
}

render() {
  return(
    <div id="app">
      <ScoreContainer
      scores={this.state.scores}
      updateHits={this.updateHits}
      handleSave={this.handleSave}
       />
    </div>
  )
}
}

export default ScoreCompiler;
