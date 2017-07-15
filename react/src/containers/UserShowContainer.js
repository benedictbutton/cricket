import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import UserShow from '../components/UserShow';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: [],
        current_user: [],
        player: [],
        error: null
      };
      // this.handleLink = this.handleLink.bind(this);
  }

  componentDidMount() {
    let userId = this.props.params.id;
    fetch(`/api/v1/users/${userId}`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json();
      return parsed;
    })
    .then (responseData => {
      this.setState({ user: responseData, current_user: responseData.current_user, player: responseData.player });
    });
  }

  // handleLink(event) {
  //   event.preventDefault();
  //   let path = '/auth/register/edit';
  //   browserHistory.push(path);
  // }

render() {
  let player = this.state.player.name;
  let firstName = this.state.current_user.first_name;
  let lastName = this.state.current_user.last_name;
  let email = this.state.current_user.email;

  return(
    <div>
      <UserShow
        player={player}
        firstName={firstName}
        lastName={lastName}
        email={email}
        handleLink={this.handleLink}
        />
    </div>
  )
}
}

export default UserShowContainer;
