import React, { Component } from 'react';
import ScoreContainer from './ScoreContainer';
import update from 'immutable';

class ScoreCompiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
    scores: [],
    score: null
  };
  this.handleChange = this.handleChange.bind(this);
  // this.updateHits = this.updateHits.bind(this);
}

  componentDidMount() {
      let gameId = this.props.params.id;
      fetch(`/api/v1/scores/${gameId}`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ scores: responseData.game });
      });
    }

    handleChange() {
      debugger;
  this.setState(({score}) => ({
    score: score.set('hits', score.get('hits') + 1)
  }));
}




// handleChange(scoreObj) {
// //   if(hits < 3){
// //
//
// //   }
// // }
// debugger;
//   const newScore = update(scoreObj, {hits: {$set: scoreObj.hits + 1}});
//   debugger;
//   return newScore;
// }

    // / const newObj2 = update(obj, {b: {$set: obj.b * 2}});

  // {
  //   if(hits < 3) {
  //     return hits + 1;}



//   const obj = {a: 5, b: 3};

// const newObj2 = update(obj, {b: {$set: obj.b * 2}});



// handleChange(id) {
//   const updatedHitsAttribute = this.state.scores[id].hits;
//  if( updatedHitsAttribute < 3) {
//    updatedHitsAttribute = this.state.scores[id].hits + 1;
//  }
//  else{
//      updatedHitsAttribute = this.state.scores[id].hits-3;
//    }
//    this.setState({ scores: [...this.state.scores[id].hits, ...updatedHitsAttribute] });
//    debugger;
//      }

render() {
  return(
    <div id="app">
      <ScoreContainer
      scores={this.state.scores}
      handleChange={this.handleChange}
      // updateHits={this.updateHits}
       />
    </div>
  )
}
}

export default ScoreCompiler;
