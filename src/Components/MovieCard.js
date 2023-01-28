import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const MovieCard = ({ movie }) => {
  console.log(movie);
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
            <PlayCircleOutlineOutlinedIcon className="CardIcon" />
            <ControlPointOutlinedIcon className="CardIcon" />
          </CardActions>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default MovieCard;
