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
