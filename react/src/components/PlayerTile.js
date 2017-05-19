import React from 'react';
import { Link } from 'react-router';

const PlayerTile = (props) => {
  return(
    <div>
      <Link to={`/players/${props.id}`}>
        <p className="player">{props.playerName}</p>
        <hr/>
      </Link>
    </div>
  )
}

export default PlayerTile;
