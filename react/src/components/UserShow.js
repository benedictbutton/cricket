import React from 'react';

const UserShow = (props) => {
  return(
<div className="small-12 large-6 columns">
    <div className="row">
    <div>
    <section className="profile">
        <h2>First Name</h2><ul>{props.firstName}</ul>
        <h2>Last Name</h2><ul>{props.lastName}</ul>
        <h2>Email</h2><ul>{props.email}</ul>
        <h2>Player Name</h2><ul>{props.player}</ul>
    </section>
    </div>
    </div>
      <a className="button" href="/auth/register/edit">Edit</a>
    </div>
  )
}

export default UserShow;
