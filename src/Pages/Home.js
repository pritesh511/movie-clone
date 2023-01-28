import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import MovieCard from "../Components/MovieCard";
import { data } from "../Assets/Data";

const Home = () => {
  const [allData, setAllData] = useState(data);
  useEffect(() => {
    setAllData(data);
  }, []);
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
