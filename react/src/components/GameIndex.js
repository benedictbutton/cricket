import React from 'react';
import { Link } from 'react-router';

const GameIndex = props => {
  return(
    <div>
        <Link to={`/games/${props.id}`} className="game">{props.title}</Link>
        <hr/>
    </div>
  )
}

export default GameIndex;
