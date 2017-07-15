import React, { Component } from 'react';

class PlayerName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h2 className="player-scoreboard" onChange={this.props.handleUpdate}>{this.props.player}
      </h2>
    );
  }
}

export default PlayerName;
