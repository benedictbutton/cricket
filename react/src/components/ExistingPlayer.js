import React from "react";
import { Link } from "react-router";

const ExistingPlayer = props => {
  return (
    <li>
      <a
        className="existing-player"
        href="#"
        onClick={() => props.handleExistingPlayer(props.id, props.playerName)}
      >
        {props.playerName}
      </a>
    </li>
  );
};

export default ExistingPlayer;
