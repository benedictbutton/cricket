import React from 'react';

const TwoPlayerField = (props) => {
  return(
    <div className="small-4 columns">
        <label>{props.label}
          <input type="text"
          name={props.name}
          value={props.player}
          onChange={props.handleChange}
          />
        </label>
    </div>
  );
}

export default TwoPlayerField;
