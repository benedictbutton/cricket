import React, { Component } from 'react';
import ScoreCompiler from './ScoreCompiler';
import PlayerName from '../components/PlayerName';
import ScoreOne from '../components/ScoreOne';
import ScoreTwo from '../components/ScoreTwo';
import ScoreRegions from '../components/ScoreRegions';
import ScoreSave from '../components/ScoreSave';
import ScoreDelete from '../components/ScoreDelete';

class ScoreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleNames = this.handleNames.bind(this);
  }

  handleChange(id, hits) {
    this.props.updateHits(id, hits);
  }

  handleSort(a, b) {
    return a.id - b.id;
  }

  handleNames(playerNames, obj) {
    let last = playerNames.length - 1;

    if (playerNames[last].player_name !== obj.player_name) {
      playerNames.push(obj);
    }
      return playerNames;
  }

render() {

let sortedScores = this.props.scores.sort(this.handleSort);

let players = sortedScores.reduce((this.handleNames), [sortedScores[0]]);

let playerOne = this.props.assignPlayerOne(players);

let playerTwo = this.props.assignPlayerTwo(players);

  let scoreOne = this.props.scores.slice(0, 7);
  let scoreTwo = this.props.scores.slice(7,14);
  let scoreOneIndex = 20;
  let scoreTwoIndex = 27;

     scoreOne = scoreOne.map(score => {
       let indexOne = scoreOneIndex - score.region;
           return(
             <ScoreOne
                 key={score.id}
                 id={indexOne}
                 player={score.player_id}
                 region={score.region}
                 hits={score.hits}
                 handleChange={this.handleChange}
                 />
             )
           });

           scoreTwo = scoreTwo.map(score => {
             let indexTwo = scoreTwoIndex - score.region;
             return(
             <ScoreTwo
               key={score.id}
               id={indexTwo}
               player={score.player_id}
               region={score.region}
               hits={score.hits}
               handleChange={this.handleChange}
              />
           )
         });

return(
<div>
    <div className="row align-center">
      <div className="medium-4 columns">
        <PlayerName player={playerOne} />
      </div>

      <div className="small-3 columns">
        <div className="row align-spaced">
          <form>
            <ScoreSave
             handleSave={this.props.handleSave}/>

            <div className="divider" />

            <ScoreDelete handleDelete={this.props.handleDelete}/>
          </form>
        </div>
      </div>
      <div className="medium-4 columns">
        <PlayerName player={playerTwo} />
      </div>
    </div>

  <div className="containment" flex>
    <div className="row align-center">
      <div className="medium-4 columns">
        {scoreOne}
      </div>

      <div className="small-3 columns">
        <ScoreRegions />
      </div>

      <div className="medium-4 columns">
        {scoreTwo}
      </div>
      </div>
    </div>
  </div>
)
}
}

export default ScoreContainer;
