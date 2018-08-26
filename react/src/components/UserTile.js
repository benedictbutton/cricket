import React from 'react';

const UserTile = (props) => {
  return(
    <div className="user-tile">
      <Link to={`/users/${props.id}`}>
        {props.username}
      </Link>
    </div>
  )
}

export default UserTile;
