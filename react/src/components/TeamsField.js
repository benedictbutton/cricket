import React, { Component } from 'react';

class TeamsField extends Component {
  constructor(props) {
    super(props);
    }

render() {

  if(this.props.gameType === 'twoPlayer') {
    return null;
  }

  return(
    <div className="row">

      <div className="small-6 columns">
        <label>Player 3
          <input type="text"
          name="playerThree"
          value={this.props.playerThree}
          onChange={this.props.handleChange}
          />
        </label>
      </div>

       <div className="small-6 columns">
        <label>Player 4
          <input type="text"
          name="playerFour"
          value={this.props.playerFour}
          onChange={this.props.handleChange}
          />
        </label>
      </div>

    </div>
  );
}
}

  export default TeamsField;
