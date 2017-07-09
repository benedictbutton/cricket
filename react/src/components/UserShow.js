import React from 'react';

const UserShow = (props) => {
  return(
    <div>
    <div className="media-object">
    <div className="media-object-section">
    <div className="thumbnail">
    <img src="/assets/board.jpg" width="300px" />
    </div>
  </div>
  <div className="media-object-section main-section">
  <div className="row small-up-1 medium-up-2 large-up-2 collapse">
  <div className="small-2 columns"><h1 className="even">First Name</h1></div>
  <div className="small-2 columns"><h1 className="hits">{props.firstName}</h1></div>
  <div className="small-2 columns"><h1 className="odd">Last Name</h1></div>
  <div className="small-2 columns"><h1 className="hits">{props.lastName}</h1></div>
  <div className="small-2 columns"><h1 className="even">Email</h1></div>
  <div className="small-2 columns"><h1 className="hits">{props.email}</h1></div>
  <div className="small-2 columns"><h1 className="odd">Player Name</h1></div>
  <div className="small-2 columns"><h1 className="hits">{props.player}</h1></div>
  </div>
  </div>
</div>
    <a className="button" href="/auth/register/edit">Edit</a>
    </div>
  )
}

export default UserShow;
