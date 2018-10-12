import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1
        className="hits"
        onClick={() => {
          this.props.handleChange(this.props);
        }}
      >
        {this.props.log}
      </h1>
    );
  }
}

export default Score;
