import React from 'react'
import {Waypoint} from 'react-waypoint';

const InfiniteScroll = (props) => {
  return (
    <div>
        {/* {props.children} */}
        <Waypoint bottomOffset="-15px" onEnter={props.Videos}>
        </Waypoint>
    </div>
  )
}

export default InfiniteScroll

