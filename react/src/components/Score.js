import React, { Component } from "react";
import DeleteIcon from "./DeleteIcon";

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { log, record, points, handleClearPts, handleChange } = this.props;
    return (
      <div className="containment">
        <div className="row align-center">
          {record > 6 && points && (
            <div className="medium-2 columns align-self-middle text-center">
              <button
                onClick={() => {
                  handleClearPts(this.props);
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
                handleChange(this.props);
              }}
            >
              {this.props.log}
            </h1>
          </div>
          {record <= 6 && points && (
            <div className="medium-2 columns align-self-middle text-center">
              <button
                onClick={() => {
                  handleClearPts(this.props);
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
