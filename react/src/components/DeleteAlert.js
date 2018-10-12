import React from "react";
import { Link } from "react-router";

const DeleteAlert = props => {
  return (
    <div className="callout">
      <p>Game Successfully Deleted!</p>
      <button
        className="close-button"
        aria-label="Dismiss alert"
        type="button"
        onClick={props.confirmDelete}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default DeleteAlert;
