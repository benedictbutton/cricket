import React from 'react';

const PlayerShow = (props) => {

  return(
    <section>
      <h1>Player Record</h1>
      <ul>
        <li>Player {props.playerName}</li>
      </ul>
    </section>
  )
}

export default PlayerShow;
