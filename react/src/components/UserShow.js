import React from 'react';

const UserShow = (props) => {

  return(

<div className="small-12 large-6 columns">
    <div className="row">
    <div>
    <h1 className="profile-username">{props.username}</h1>
    <section className="profile">
        <h2>First Name</h2><ul>{props.firstName}</ul>
        <h2>Last Name</h2><ul>{props.lastName}</ul>
        <h2>Email</h2><ul>{props.email}</ul>
    </section>
    </div>
    </div>
    </div>
  )
}

export default UserShow;
