import React, { Component } from 'react';

class ScoreOne extends Component {
  constructor(props) {
    super(props);
    }

render() {
  return(
        <h1 className="hits" onClick={() => {this.props.handleChange(this.props.id) }}>
        {(() => {
          switch(this.props.hits) {
            case 1: return '/';
            case 2: return 'X';
            case 3: return '⨂';
            default: return " ";
          }
     })()}
     </h1>
  )
}
}

export default ScoreOne;
