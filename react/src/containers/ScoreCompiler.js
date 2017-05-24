import React, { Component } from 'react';
import ScoreContainer from './ScoreContainer';

class ScoreCompiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
    scores: []
  };
  this.updateHits = this.updateHits.bind(this);
}

  componentDidMount() {
      let gameId = this.props.params.id;
      fetch(`/api/v1/scores/${gameId}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ scores: [...this.state.scores, ...responseData.game] });
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

  // updateHits(id) {
  //   const updatedHitsAttribute = [...this.state.scores];
  // if( updatedHitsAttribute[id].hits < 3) {
  //   updatedHitsAttribute[id].hits = this.state.scores[id].hits + 1;
  // }
  // else{
  //     updatedHitsAttribute[id].hits = this.state.scores[id].hits-3;
  //   }
  //   this.setState({ scores: [...this.state.scores, ...updatedHitsAttribute] });
  //     }

render() {
  return(
    <div id="app">
      <ScoreContainer
      scores={this.state.scores}
      updateHits={this.updateHits}
       />
    </div>
  )
}
}

export default ScoreCompiler;
