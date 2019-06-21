import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="containment">
        <div className="row align-center">
          {this.props.record > 6 && this.props.points && (
            <div className="medium-2 columns align-self-middle text-center">
              <button
                onClick={() => {
                  this.props.handleClearPts(this.props);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          )}
          <div className="medium-10 columns align-self-middle">
            <h1
              className="hits"
              onClick={() => {
                this.props.handleChange(this.props);
              }}
            >
              {this.props.log}
            </h1>
          </div>
          {this.props.record <= 6 && this.props.points && (
            <div className="medium-2 columns align-self-middle text-center">
              <button
                onClick={() => {
                  this.props.handleClearPts(this.props);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Score;
