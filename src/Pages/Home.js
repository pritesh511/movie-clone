import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import MovieCard from "../Components/MovieCard";
import { data } from "../Assets/Data";

const Home = () => {
  const [allData, setAllData] = useState([]);
  let pathName = window.location.pathname;
  useEffect(() => {
    if (pathName === "/movie") {
      let filterMovieData = data.filter((item) => item.Type === "movie");
      setAllData(filterMovieData);
    } else if (pathName === "/tv-show") {
      let filterShowData = data.filter((item) => item.Type === "series");
      console.log("filterMovieData", filterShowData);
      setAllData(filterShowData);
    } else {
      setAllData(data);
    }
  }, [pathName]);
  return (
    <React.Fragment>
      <div className="MainWrap">
        <Appbar />
        <div className="MovieContainer">
          {allData?.map((item, index) => {
            return <MovieCard movie={item} key={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
