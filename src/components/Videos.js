import React, {useState, useEffect} from 'react'
import './Videos.css'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps(){
    const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.YOUTUBE_API_KEY}`);
    const data = await response.json();
    console.log(data);
    console.log("hello");
    return{
        props:{
            data
        }
    }
}

const Videos = ({data}) => {
    console.log('data',data);
    console.log("hello");
    return (
        <div className="videos">
            <h1>Videos</h1>
        </div>
    )
}


// YoutubeAPI();
export default Videos

