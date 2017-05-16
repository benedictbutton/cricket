import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class GameShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRecord: []
  };

}

  componentDidMount() {
    let gameId = this.props.params.id;
    fetch(`/api/v1/games/${gameId}`)
    .then(response => {
      let parsed = response.json();
      return parsed;
    })
    .then (responseData => {
      this.setState({ gameRecord: responseData })
    });
  }

  render() {
    let title = this.state.gameRecord.title;

    return(
    <GameShow

    test = 'test'


    />
    );
  }
}

export default GameShowContainer;
