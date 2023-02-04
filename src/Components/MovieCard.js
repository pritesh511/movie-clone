import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import {
  myList,
  setAnimationDetailsCard,
  setMovieDetailsCard,
} from "../Redux/Action";
import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withStyles } from "@material-ui/core";
import { Grid } from "@mui/material";

const MovieCard = (props) => {
  const { movie, classes } = props;
  const dispatch = useDispatch();
  const addMyList = (movie) => {
    dispatch(myList(movie));
    // toast.success("Movie added in your list successfully");
  };

  const handleMovieDetailCard = (movie) => {
    dispatch(setAnimationDetailsCard(true));
    setTimeout(() => {
      dispatch(setMovieDetailsCard(movie));
    }, 1000);
  };

  return (
    <React.Fragment>
      <Grid className={classes.MovieCardWrap}>
        <Card className={classes.MovieCard}>
          <CardMedia
            component="img"
            alt="green iguana"
            className={classes.CardImage}
            image={movie?.Poster}
          />
          <div className={classes.CardContentWrap}>
            <CardContent style={{ padding: 0, margin: "8px 0 0 0" }}>
              <Typography className={classes.CardMovieName}>
                {movie?.Title}
              </Typography>
            </CardContent>
            <CardActions style={{ padding: 0, margin: "8px 0 0 0" }}>
              <PlayCircleOutlineOutlinedIcon
                className={classes.CardIcon}
                onClick={() => handleMovieDetailCard(movie)}
              />
              <ControlPointOutlinedIcon
                className={classes.CardIcon}
                onClick={() => addMyList(movie)}
              />
            </CardActions>
          </div>
        </Card>
      </Grid>
      {/* <ToastContainer /> */}
    </React.Fragment>
  );
};

const styles = () => ({
  MovieCard: {
    backgroundColor: "#1a2536 !important",
    maxWidth: "178px",
    padding: "10px",
    borderRadius: "11px",
  },
  MovieCardWrap: {
    padding: "8px",
  },
  CardContentWrap: {
    maxWidth: "157px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  CardImage: {
    height: "188px",
    maxWidth: "157px",
    minWidth: "157px",
    borderRadius: 6,
  },
  CardMovieName: {
    fontSize: "15px",
    lineHeight: "20px",
    color: "#d4d7dd",
    fontFamily: "Open Sans !important",
  },
  CardIcon: {
    fontSize: "20px !important",
    color: "#d4d7dd",
    cursor: "pointer",
  },
});

export default withStyles(styles)(MovieCard);
