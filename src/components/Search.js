import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import VideoRow from './VideoRow';
import "./Search.css";
import { fetchedData } from './Layout/Header/Header';
// import Videos from './Videos';

const SearchButton=()=>{
    const [data, setData] = useState([]);
     const search = useContext(fetchedData);
     console.log(search)
    const getData = async () => {
        let apiData;
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyAoUJioByIeFEahylpEWCu5BBZ0xnk3hcM`
        );
        apiData = await response.json();
        setData(apiData.items);
      };
      useEffect(() => {
        getData();
      }, []);
    console.log("hello")
      console.log(data);
    
}


const Search = () => {
    return (
        <div className="search_page">
            <h1>Filter</h1>
            <hr/>
            {/* <VideoRow/> */}
        </div>
        
    )
}

export default Search

