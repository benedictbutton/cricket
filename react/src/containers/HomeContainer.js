import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(window.location.href.includes('cloudfront')) return <Redirect to='http://crickety.herokuapp.com'/>;
    return <div id="app" />;
  }
}

export default HomeContainer;
