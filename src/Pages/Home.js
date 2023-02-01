import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import MovieCard from "../Components/MovieCard";
import { data } from "../Assets/Data";
import { useSelector } from "react-redux";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const FilterData = useSelector((state) => state.Search.Movie_List);
  let pathName = window.location.pathname;
  useEffect(() => {
    if (pathName === "/movie") {
      let filterMovieData = FilterData.filter((item) => item.Type === "movie");
      setAllData(filterMovieData);
    } else if (pathName === "/tv-show") {
      let filterShowData = FilterData.filter((item) => item.Type === "series");
      setAllData(filterShowData);
    } else {
      setAllData(FilterData);
    }
  }, [pathName, FilterData]);
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
