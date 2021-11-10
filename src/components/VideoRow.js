import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const VideoRow = () => {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/search";
  const [data, setData] = useState([]);

  const getData = async () => {
    let apiData;
    const response = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=48&key=AIzaSyAoUJioByIeFEahylpEWCu5BBZ0xnk3hcM`
    );
    apiData = await response.json();
    setData(apiData.items);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>VideoRow</h1>
      {data.map((e) => {
          return(
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                
              </Typography>
              <Typography variant="body2" color="text.secondary">
                
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
          )
      })}
    </div>
  );
};

export default VideoRow;
