import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import MovieCard from "../Components/MovieCard";
import { useSelector } from "react-redux";

const MyList = () => {
  const [allData, setAllData] = useState([]);
  const FilterData = useSelector((state) => state.Search.MY_List);
  useEffect(() => {
    setAllData(FilterData);
  }, [FilterData]);
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

export default MyList;
