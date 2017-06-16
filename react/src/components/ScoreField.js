import React from 'react';
import { Link } from 'react-router';

const ScoreField = (props) => {
  return(
    <button className="button" onClick={props.handleSave}>Save</button>

  )

}

export default ScoreField;
