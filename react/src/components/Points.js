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
          <div className={`row ${this.props.side === "right" ? 'align-right' : ''}`}>
            <div className="medium-10 columns align-self-middle align-right">
              <h1 className="hits">{this.props.total}</h1>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Points;
