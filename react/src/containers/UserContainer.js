import React, { Component } from 'react';
import UserShow from '../components/UserShow';

class UserContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: []
      }
  }

  componentDidMount() {
    let userId = this.props.params.id;
    fetch(`/api/v1/users/${userId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then (responseData => {
      this.setState({ user: responseData });
    })
    }



render() {
  let firstName = this.state.user.first_name
  let lastName = this.state.user.last_name
  let username = this.state.user.username

  return(
    <UserShow
      firstName={firstName}
      lastName={lastName}
      username={username}
    />
  )

}
}


export default UserContainer;
