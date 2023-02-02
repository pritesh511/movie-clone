import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { useNavigate } from "react-router-dom";
import { myList } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieCard = ({ movie }) => {
  const TempUrl = movie?.Title.replace(/[^\w ]/, "").split(" ");
  const MainUrl = TempUrl.join("-").toLowerCase();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addMyList = (movie) => {
    dispatch(myList(movie));
    toast.success("Movie added in your list successfully");
  };
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 178 }} className="MovieCard">
        <CardMedia
          component="img"
          alt="green iguana"
          className="CardImage"
          image={movie?.Poster}
        />
        <div className="CardContentWrap">
          <CardContent style={{ padding: 0, margin: "8px 0 0 0" }}>
            <Typography className="cardMovieName">{movie?.Title}</Typography>
          </CardContent>
          <CardActions style={{ padding: 0, margin: "8px 0 0 0" }}>
            <PlayCircleOutlineOutlinedIcon
              className="CardIcon"
              onClick={() => {
                navigate(`/movie-details/${MainUrl}`, {
                  state: movie,
                });
              }}
            />
            <ControlPointOutlinedIcon
              className="CardIcon"
              onClick={() => addMyList(movie)}
            />
          </CardActions>
        </div>
      </Card>
      <ToastContainer />
    </React.Fragment>
  );
};

export default MovieCard;
