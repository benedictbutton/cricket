import React, { Component } from "react";

class Points extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.pts) {
      return null;
    } else {
      return (
        <div className="containment">
          <div className="row align-center">
            {this.props.side === "left" && (
              <div className="medium-2 columns align-self-middle text-center"></div>
            )}
            <div className="medium-10 columns align-self-middle">
              <h1 className="hits">{this.props.total}</h1>
            </div>
            {this.props.side === "right" && (
              <div className="medium-2 columns align-self-middle text-center"></div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default Points;
