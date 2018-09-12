import React from 'react';
import GameFormContainer from '../containers/GameFormContainer';

const PointsField = (props) => {
  return(
    <div className="switch large">
      <input className="switch-input" id="yes-no" type="checkbox" name="pointsOption" onClick={ () = { props.handlePlayPoints } }>
      <label className="switch-paddle" htmlFor="yes-no">
        <span className="show-for-sr">Play Points</span>
        <span className="switch-active" aria-hidden="true">Yes</span>
        <span className="switch-inactive" aria-hidden="true">No</span>
      </label>
    </div>
  )
}

export default PointsField;
