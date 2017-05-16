import React from 'react';
import { Link } from 'react-router';

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
