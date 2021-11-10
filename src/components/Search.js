import React, {useState, useEffect} from 'react';
import axios from 'axios';
import VideoRow from './VideoRow';

// import Videos from './Videos';

const Search = () => {
    return (
        <div>
            <h1>Filter</h1>
            <hr/>
            <VideoRow/>
        </div>
        
    )
}

export default Search

