import React, { Component } from 'react';

const PlayerName = (props) => {
    return(
      <h2 className="player-scoreboard" onChange={props.handleUpdate}>{props.player}
      </h2>
    );
  }

export default PlayerName;
