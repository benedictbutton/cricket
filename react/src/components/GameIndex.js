import React from 'react';
import { Link } from 'react-router';

const GameIndex = props => {
  return(
    <div className="row">
      <div className="small-6 columns">
      <Link to={`/games/${props.id}`} className="game">{props.title}</Link>
      </div>
      <div className="small-6 columns">{props.date}
      </div>
    <hr />
    </div>
  )
}

export default GameIndex;
