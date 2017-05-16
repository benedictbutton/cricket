import React from 'react';
import { Link } from 'react-router';

const GameField = (props) => {



  return(
    <form onSubmit={props.handleSubmit}>

    <label>Select Game Type
      <select>
        <option>Two Player</option>
        <option>Teams</option>
      </select>
    </label>

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
    <button className="button" type="submit" value="Submit">Submit</button>
    </form>
);
}


  export default GameField;
