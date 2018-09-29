import React, { Component } from 'react';
import ScoreCompiler from './ScoreCompiler';
import PlayerName from '../components/PlayerName';
import Points from '../components/Points';
import PointsRegion from '../components/PointsRegion';
import Score from '../components/Score';
import ScoreRegions from '../components/ScoreRegions';
import ScoreSave from '../components/ScoreSave';
import ScoreDelete from '../components/ScoreDelete';

class ScoreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePointDisplay = this.handlePointDisplay.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleNames = this.handleNames.bind(this);
    this.handlePtsRegion = this.handlePtsRegion.bind(this);
  }

  handleChange(obj) {
    this.props.updateHits(obj);
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

handlePointDisplay(score) {
  let hits = score.hits;
  let region = score.region;

  let markedHits = (hits) => {
    switch(hits) {
      case 0: return ' ';
      case 1: return '/';
      case 2: return 'X';
      case 3: return String.fromCharCode(10754);
      default: return ' ';
    }
  };

  let pointHits = (hits, region) => {
    if(hits<4) {
      return markedHits(hits);
    }
    return (region * hits) - (region*3);
  };

let result = (score.points) ? pointHits(hits, region) : markedHits(hits);

return result;
}

handlePtsRegion () {
  if(this.props.scores.length!==0) {
  return this.props.scores[0].points;
  }
}

render() {
  let pts = this.handlePtsRegion();

  let sortedScores = this.props.scores.sort(this.handleSort);

  let players = sortedScores.reduce((this.handleNames), [sortedScores[0]]);

  let playerOne = this.props.assignPlayerOne(players);

  let playerTwo =           this.props.assignPlayerTwo(players);

  let scoreOne = this.props.scores.slice(0, 7);
  let scoreTwo = this.props.scores.slice(7,14);
  let scoreOneIndex = 20;
  let scoreTwoIndex = 27;

  let initialValue = 0;
  let totalOne = scoreOne.reduce((accumulator, currentValue, idx, initialValue) =>
    (scoreOne[idx].hits<4) ? accumulator : accumulator + (scoreOne[idx].hits*scoreOne[idx].region) - (scoreOne[idx].region*3), initialValue
  );

  let totalTwo = scoreTwo.reduce((accumulator, currentValue, idx, initialValue) =>
    (scoreTwo[idx].hits<4) ? accumulator : accumulator + (scoreTwo[idx].hits*scoreTwo[idx].region) - (scoreTwo[idx].region*3), initialValue
  );

     scoreOne = scoreOne.map(score => {
      let log = this.handlePointDisplay(score);
      let indexOne = scoreOneIndex - score.region;
           return(
             <Score
                 key={score.id}
                 id={indexOne}
                 player={score.player_id}
                 region={score.region}
                 hits={score.hits}
                 log={log}
                 points={score.points}
                 handleChange={this.handleChange}
                 handlePointDisplay={this.handlePointDisplay}
                 />
             )
           });

           scoreTwo = scoreTwo.map(score => {
             let log = this.handlePointDisplay(score);
             let indexTwo = scoreTwoIndex - score.region;
             return(
             <Score
               key={score.id}
               id={indexTwo}
               player={score.player_id}
               region={score.region}
               hits={score.hits}
               log={log}
               points={score.points}
               handleChange={this.handleChange}
               handlePointDisplay={this.handlePointDisplay}
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
        <Points total={totalOne} pts={pts} />
      </div>


      <div className="small-3 columns">
        <ScoreRegions />
        <PointsRegion pts={pts}/>
      </div>



      <div className="medium-4 columns">
        {scoreTwo}
        <Points total={totalTwo} pts={pts} />
      </div>

      </div>
    </div>
  </div>
)
}
}

export default ScoreContainer;
