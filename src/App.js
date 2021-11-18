import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/SideBar";
import Videos from "./components/Layout/Videos/Videos";
import Search from "./components/Search";
import YoutubeApi from "./api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const [search, setSearch] = useState("undefined");
  
  const [API, setAPI] = useState(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=IN&maxResults=10&key=AIzaSyAoUJioByIeFEahylpEWCu5BBZ0xnk3hcM `
  );
  return (
    <Router>
      <div className="App">
        
        <Switch>
          
          <Route path="/">
            <Header />
            <div className="App_page">
              <SideBar />
              <ThemeSwitch/>
            </div>
            </Route>
            <Route exact path="/search/:searchTerm">
            <SideBar />
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
