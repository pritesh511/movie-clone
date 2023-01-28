import React from "react";
import Home from "./Pages/Home";
import "../src/Components/Component.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <div className="container">
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
