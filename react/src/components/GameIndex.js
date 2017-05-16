import React from 'react';
import { Link } from 'react-router';

const GameIndex = props => {

  return(
    <section>
        <Link to={`/games/${props.id}`}>{props.title}</Link>
    </section>
  )
}

export default GameIndex;
