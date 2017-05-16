import React, { Component } from 'react';
import UserShow from '../components/UserShow';

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: [],
        current_user: []
      };
  }

  componentDidMount() {
    let userId = this.props.params.id;
    fetch(`/api/v1/users/${userId}`, {credentials: 'same-origin'})
    .then(response => {
      let parsed = response.json();
      return parsed;
    })
    .then (responseData => {
      this.setState({ user: responseData, current_user: responseData.current_user });
    });
  }

render() {
  let username = this.state.current_user.username;
  let firstName = this.state.current_user.first_name;
  let lastName = this.state.current_user.last_name;
  let email = this.state.current_user.email;



  return(
    <div>
      <UserShow
        username={username}
        firstName={firstName}
        lastName={lastName}
        email={email}
        />
    </div>
  )
}
}


export default UserShowContainer;
