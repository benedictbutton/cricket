import React from 'react';

const UserShow = (props) => {
  return(
    <section>
      <h1>Profile</h1>
      <ul>
        <li>First Name {props.firstName}</li>
        <li>Last Name {props.lastName}</li>
        <li>Username {props.username}</li>
      </ul>
    </section>
  )
}

export default UserShow;
