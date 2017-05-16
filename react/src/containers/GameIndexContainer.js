import React, { Component } from 'react';
import GameIndex from '../components/GameIndex';
import GameFormContainer from './GameFormContainer';
import GameField from '../components/GameField';
import ScoreContainer from './ScoreContainer';

class GameIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/games')
    .then(response => {
      let parsed = response.json();
      return parsed })
    .then (responseData => {
      this.setState({ games: responseData  });
    });
  }

render() {
  let games = this.state.games.map(game => {
    let id = game.id;
    let title = game.title;
    return(
      <GameIndex
      key={id}
      id={id}
      title={title}
      />

      )
    });

    return(
      <div className="row">
      <div className="small-8 small-centered columns">
        <h1>Games</h1>
          {games}
          {this.props.children}
      </div>
      </div>
    )
  }
}

export default GameIndexContainer;