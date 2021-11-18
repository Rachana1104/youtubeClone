import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import VideoRow from './VideoRow';
import "./Search.css";
import { fetchedData } from './Layout/Header/Header';
// import Videos from './Videos';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Search=()=>{
    const [data, setData] = useState([]);
     const search = useContext(fetchedData);
     console.log(search)
    const getData = async () => {
        let apiData;
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?q=${search}&part=snippet&chart=mostPopular&regionCode=IN&maxResults=10&key=AIzaSyAoUJioByIeFEahylpEWCu5BBZ0xnk3hcM`
        );
        apiData = await response.json();
        setData(apiData.items);
      };
      useEffect(() => {
        getData();
      }, [search]);
    console.log("hello")
      console.log(data);

      return (
        <div className="search_page">
            <h1>Filter</h1>
            <hr/>
            {data.map((videos,index) => {
          return(
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={videos.snippet.thumbnails.medium.url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {videos.snippet.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {videos.snippet.channelTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          )
      })}
        </div>
      )
}


export default Search

