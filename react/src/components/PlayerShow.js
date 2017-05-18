import React from 'react';
import { Link } from 'react-router';

const PlayerShow = (props) => {
  return(
      <Link to={`/games/${props.gameId}`} className="game">
      <li className="player-games">{props.gameTitle}</li></Link>
    )
}

export default PlayerShow;
