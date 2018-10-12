import React, { Component } from "react";

class TeamLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.gameType === "twoPlayer") {
      return null;
    }

    return <h3 className="team-labels">Team {this.props.team}</h3>;
  }
}

export default TeamLabel;
