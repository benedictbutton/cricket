import React, { Component } from "react";
import UserShow from "../components/UserShow";

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      current_user: {},
      avatar: "",
      player: [],
      error: null,
      test: "run"
    };
  }

  componentDidMount() {
    let userId = this.props.match.params.id;
    fetch(`/api/v1/users/${userId}`, {
      credentials: "same-origin"
    })
      .then(response => {
        let parsed = response.json();
        return parsed;
      })
      .then(responseData => {
        this.setState({
          user: responseData,
          current_user: responseData.current_user,
          avatar: responseData.current_user.avatar.medium.url,
          player: responseData.player
        });
      });
  }

  render() {
    let id = this.state.current_user.id;
    let player = this.state.player.name;
    let firstName = this.state.current_user.first_name;
    let lastName = this.state.current_user.last_name;
    let email = this.state.current_user.email;
    let avatar = this.state.avatar;

    return (
      <div>
        <div>
          <UserShow
            id={id}
            player={player}
            firstName={firstName}
            lastName={lastName}
            email={email}
            avatar={avatar}
          />
        </div>
      </div>
    );
  }
}

export default UserShowContainer;
