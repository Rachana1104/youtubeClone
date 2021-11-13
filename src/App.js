import React from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/SideBar";
import Videos from "./components/Layout/Videos/Videos";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <SideBar />
            <Search />
          </Route>
          <Route path="/">
            <div className="App_page">
              <SideBar />
              <Videos />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
