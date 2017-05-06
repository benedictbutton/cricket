import React, { Component } from 'react';

class UsersContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: {}
      }
    }

    componentDidMount() {
        fetch('/api/v1/users')
        .then(response => response.json())
        .then(responseData => {
          this.setState({ users: responseData });
      });
    }

  render() {
    let users = this.state.users.map(user => {
      return(
        <UserShow
        id={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        username={user.username}
        email={user.email}
        />
      )
  })
}
}


export default UsersContainer;
