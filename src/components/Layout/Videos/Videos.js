import React, { useState, useEffect, createContext, useContext } from "react";
import "./Videos.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LazyLoad from "react-lazyload";
import { CardActionArea } from "@mui/material";

const PageNumber = 1;

const Videos = () => {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/videos";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PageNumber);

  const getData = async () => {
    let apiData;
    const response = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&regionCode=IN&maxResults=48&key=AIzaSyAoUJioByIeFEahylpEWCu5BBZ0xnk3hcM`
    );
    apiData = await response.json();
    setData(apiData.items);
  };
  useEffect(() => {
    getData();
  }, [page]);

  console.log(data);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  const Spinner = () => {
    return <h5>Loading...</h5>;
  };

  return (
    <div className="videos">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 8, sm: 12, md: 16 }}
        >
          {data.length > 0 &&
            data.map((videos, index) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <LazyLoad placeholder={<Spinner />}>
                    <Card sx={{ maxWidth: 300 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={videos.snippet.thumbnails.medium.url}
                          alt=""
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="video_title"
                            style={{ fontSize: 15, fontWeight: "bold" }}
                          >
                            {videos.snippet.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ fontSize: 12 }}
                          >
                            {videos.snippet.channelTitle} <br />
                            {videos.statistics.viewCount} views ???
                            {videos.statistics.likeCount} Likes
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </LazyLoad>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Videos;
