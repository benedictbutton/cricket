import React, { Component } from 'react';
import { Link } from 'react-router';
import GameTwoField from '../components/GameTwoField';

class GameTwoContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let test = "test"
    return(
      <GameTwoField test = {test} />

    )
  }
}

export default GameTwoContainer;
