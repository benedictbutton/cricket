import React, { Component } from 'react';
import ScoreCompiler from './ScoreCompiler';
import ScoreOne from '../components/ScoreOne';
import ScoreTwo from '../components/ScoreTwo';
import ScoreRegions from '../components/ScoreRegions';
import ScoreField from '../components/ScoreField';


class ScoreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleChange(id, hits) {
    this.props.updateHits(id, hits);
  }

  handleSort(a, b) {
    return a.id - b.id
  }

render() {
let playerOne;
let playerTwo;

this.props.scores.sort(this.handleSort);

  let scoreOne = this.props.scores.slice(0, 7);
  let scoreTwo = this.props.scores.slice(7,14);
  let scoreOneIndex = 20
  let scoreTwoIndex = 27

     scoreOne = scoreOne.map(score => {
       playerOne = score.player_name;
       let indexOne = scoreOneIndex - score.region
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
             playerTwo = score.player_name
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
    <div className="row">
      <div className="medium-4 columns">
        <h2 className="player-scoreboard">{playerOne}</h2>
      </div>

      <div className="small-3 columns">
        <form>
          <ScoreField
          score={this.props.scores} handleSave={this.props.handleSave}/>
        </form>
      </div>

      <div className="medium-4 columns">
        <h2 className="player-scoreboard">{playerTwo}</h2>
      </div>
    </div>

  <div className="containment" flex>
    <div className="row align-middle">
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
