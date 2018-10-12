import React, { Component } from "react";

class TeamsField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.gameType === "twoPlayer") {
      return null;
    }

    return (
      <div className="small-4 columns">
        <label>
          {this.props.label}
          <input
            type="text"
            name={this.props.name}
            value={this.props.player}
            onChange={this.props.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default TeamsField;
