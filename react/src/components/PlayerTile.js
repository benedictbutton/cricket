import React from 'react';
import { Link } from 'react-router';

const PlayerTile = (props) => {
  return(
    <div className="player-tile">
      <Link to={`/players/${player.id}`}>
        {props.playerName}
      </Link>
    </div>
  )
}

export default PlayerTile;
