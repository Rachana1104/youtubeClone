import React from 'react'
import {Waypoint} from 'react-waypoint';

const InfiniteScroll = (props) => {
  return (
    <>
        {props.children}
        <Waypoint bottomOffset="-15px" onEnter={props.Videos}>
        </Waypoint>
        
    </>
  )
}

export default InfiniteScroll

