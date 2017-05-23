import React, { Component } from 'react';

class ScoreTwo extends Component {
  constructor(props) {
    super(props);
    }

    // handleChange() {
    //   if(this.props.hits < 3) {
    //     return this.props.hits + 1;
    //   }
    //   else {
    //     return this.props.hits - 3
    //   }
    // }

render() {
  return(
<h1 className="hits" onClick={this.props.handleChange}>
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

export default ScoreTwo;
