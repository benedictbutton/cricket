import React, { Component } from 'react';

class Points extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.pts) {
      return null;
    } else {
        return(
          <h1 className="hits">
            {this.props.total}
          </h1>
        )
      }
  }
}

export default Points;
