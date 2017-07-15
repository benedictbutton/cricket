import React from 'react';
import { Link } from 'react-router';

const ScoreSave = (props) => {
  return(
    <button className="button large align-middle" onClick={props.handleSave}>Save</button>
  )
}

export default ScoreSave;
