import React from "react";
import Home from "./Pages/Home";
import MyList from "./Pages/MyList";
import "../src/Components/Component.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/movie-details/:id"
          element={<MovieDetails />}
        ></Route>
        <Route exact path="/movie" element={<Home />}></Route>
        <Route exact path="/tv-show" element={<Home />}></Route>
        <Route exact path="/my-list" element={<MyList />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
