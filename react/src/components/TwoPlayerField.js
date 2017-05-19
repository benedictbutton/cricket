import React from 'react';

const TwoPlayerField = (props) => {
  return(
    <div className="row">
      <div className="small-6 columns">
        <label>Player 1
          <input type="text"
          name="playerOne"
          value={props.playerOne}
          onChange={props.handleChange}
          />
        </label>
        </div>
      <div className="small-6 columns">
        <label>Player 2
          <input type="text"
          name="playerTwo"
          value={props.playerTwo}
          onChange={props.handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default TwoPlayerField;
