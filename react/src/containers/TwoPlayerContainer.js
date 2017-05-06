import React, { Component } from 'react';
import { Link } from 'react-router';
import TwoPlayerField from '../components/TwoPlayerField';

class TwoPlayerContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let test = "test"
    return(
      <TwoPlayerField test = {test} />

    )
  }
}

export default TwoPlayerContainer;
