import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PlayerShow from '../components/PlayerShow';

class PlayerShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerRecord: []
  };

}

  componentDidMount() {
    let playerId = this.props.params.id;
    fetch(`/api/v1/players/${playerId}`)
    .then(response => {
      let parsed = response.json();
      return parsed;
    })
    .then (responseData => {
      this.setState({ playerRecord: responseData })
    });
  }

  render() {
    return(
    <PlayerShow />
    );
  }
}

export default PlayerShowContainer;
