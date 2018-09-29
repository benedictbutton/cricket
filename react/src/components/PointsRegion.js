import React from 'react';

const PointRegion = (props) => {
  if(!props.pts) {
    return null;
  } else {
  return(
    <h1 className="odd">PTS</h1>
    )
  }
}

export default PointRegion;
