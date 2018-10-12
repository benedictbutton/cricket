import React from "react";
import { Link } from "react-router";

const SaveAlert = props => {
  return (
    <div className="callout">
      <p>Game Successfully Saved!</p>
      <button
        className="close-button"
        aria-label="Dismiss alert"
        type="button"
        onClick={props.confirmSave}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default SaveAlert;

// import React, { Component } from 'react';
// import { Link } from 'react-router';
//
// class SaveAlert extends Component {
//   constructor(props) {
//     super(props);
// }
//
// render() {
//   if(props.alert === null) {
//     return null;
//   }
//   return(
//     <div> {props.alert} </div>
//   )
// }
//
// }
//
// export default SaveAlert;
