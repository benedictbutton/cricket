import React from 'react';
import { Link } from 'react-router';

const ScoreDelete = (props) => {
  return(
    <button className="button large" data-confirm="Danger Zone!!! Are you sure you want to delete?" onClick={props.handleDelete}>Delete</button>
  )
}

export default ScoreDelete;
