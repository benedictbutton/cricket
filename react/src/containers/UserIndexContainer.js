import React, { Component } from 'react';
import UserShow from '../components/UserShow';
import UserTile from '../components/UserTile';

class UserIndexContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/users', { credentials: 'same-origin' })
    .then(response => {
      let parsed = response.json();
      return parsed; })
    .then (responseData => {
      this.setState({ users: [...this.state.users, ...responseData.users], current_user: responseData.current_user });
    });
  }

  render() {
    let users = this.state.users.map(user => {
      let id = user.id;
      let username = user.username;
      return (
        <UserTile
          id={id}
          username={username}
        />
      )
    });
    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1>Players</h1>
            {users}
        </div>
      </div>
    )
  }
}

export default UserIndexContainer;
