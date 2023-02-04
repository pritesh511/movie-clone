import React, { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import MovieCard from "../Components/MovieCard";
import { useSelector } from "react-redux";
import Drawerbar from "../Components/Drawerbar";
import { Grid, withStyles } from "@material-ui/core";
import CardDetails from "../Components/CardDetails";

const Home = (props) => {
  const { classes } = props;
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

  const MovieData = useSelector((state) => state.movieDetails.MY_DATA);
  const MovieCardAnimation = useSelector(
    (state) => state.movieDetails.ANIMATION
  );

  return (
    <React.Fragment>
      <Grid className={classes.MainWrapper}>
        <Drawerbar />
        <div className={classes.MainWrap}>
          <Appbar />
          <Grid
            className={
              MovieCardAnimation
                ? classes.CardetailsWrapAnim
                : classes.CardetailsWrap
            }
          >
            {MovieData && <CardDetails usr={MovieData} />}
          </Grid>
          <div className={classes.MovieContainer}>
            {allData?.map((item, index) => {
              return <MovieCard movie={item} key={index} />;
            })}
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};

const styles = () => ({
  MainWrapper: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  MainWrap: {
    display: "flex",
    flexDirection: "column",
    padding: "48px",
    overflow: "auto",
    width: "100%",
  },
  MovieContainer: {
    padding: "16px 0",
    margin: "0 -8px",
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  CardetailsWrap: {
    height: 0,
  },
  CardetailsWrapAnim: {
    minHeight: "458px",
    "& .CardDetailsWrapper": {
      height: "auto",
    },
  },
});

export default withStyles(styles)(Home);
