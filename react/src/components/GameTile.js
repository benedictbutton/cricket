import React from 'react';
import { Link } from 'react-router';

const GameTile = (props) => {
  debugger;
  return(
    <div id="app">
      <a className="dashboard-nav-card">
        <i className="dashboard-nav-card-icon fa fa-users"        aria-hidden="true"></i>
        <h3 className="dashboard-nav-card-title">
        <Link to={`/games/two_player`}>{props.choices.twoPlayer}
        </Link>
        </h3>
      </a>
      <a className="dashboard-nav-card">
        <i className="dashboard-nav-card-icon fa fa-users"        aria-hidden="true"></i>
        <h3 className="dashboard-nav-card-title">{props.choices.teams}</h3>
      </a>
    </div>
  )
  }

  export default GameTile;
