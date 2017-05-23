import React, { Component } from 'react';
import update from 'immutability-helper';
import ScoreCompiler from './ScoreCompiler';
import ScoreOne from '../components/ScoreOne';
import ScoreTwo from '../components/ScoreTwo';
import ScoreRegions from '../components/ScoreRegions';



class ScoreContainer extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
  }



// const newObj2 = update(obj, {b: {$set: obj.b * 2}});
// handleChange(score) {
//   debugger;
//   const newObj = update(score, {hits: {$set: score.hits + 1}});
//   return newObj.hits;
// }




  // handleChange(id) {
  //   this.props.updateHits(id);
  // }


render() {

let playerOne;
let playerTwo;

  let scoreOne = this.props.scores.slice(0, 7);
  let scoreTwo = this.props.scores.slice(7,14);

     scoreOne = scoreOne.map(score => {
       playerOne = score.player_name;

       let handleChange = () =>
        this.props.handleChange(score);
           return(
             <ScoreOne
                 key={score.id}
                 id={score.record}
                 player={score.player_id}
                 region={score.region}
                 hits={score.hits}
                 handleChange={handleChange}
                 />
             )
           });

           scoreTwo = scoreTwo.map(score => {
             playerTwo = score.player_name
             let handleChange = () =>
              this.handleChange(score);
             return(
             <ScoreTwo
               key={score.id}
               id={score.record}
               player={score.player_id}
               region={score.region}
               hits={score.hits}
               handleChange={handleChange}
              />
           )
         });

return(
<div>
    <div className="row">
      <div className="medium-4 columns">
        <h2 className="player-scoreboard">{playerOne}</h2>
      </div>

      <div className="small-3 columns"></div>

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
