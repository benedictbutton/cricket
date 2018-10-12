import React from "react";
import GameFormContainer from "../containers/GameFormContainer";

const PointsField = props => {
  return (
    <div className="row">
      <div className="columns small-3">
        <div className="row small-up-1 medium-up-2">
          <div className="columns small-2">
            <div>
              <label>Play Points</label>
            </div>
          </div>
          <div className="columns">
            <div className="switch large">
              <input
                className="switch-input"
                id="yes-no"
                type="checkbox"
                name="pointsOption"
                onClick={props.handlePlayPoints}
              />
              <label className="switch-paddle" htmlFor="yes-no">
                <span className="switch-active" aria-hidden="true">
                  Yes
                </span>
                <span className="switch-inactive" aria-hidden="true">
                  No
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsField;
