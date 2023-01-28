import { Button, List, ListItem, Typography } from "@mui/material";
import React from "react";

const CardDetails = ({ usr }) => {
  return (
    <div className="CardDetailsWrapper">
      <div className="CardDetailsLeft">
        <img className="DetailImage" src={usr?.Poster} alt="movieImage" />
      </div>
      <div className="CardDetailsRight">
        <div className="CardDetailsInner">
          <Typography variant="h5" className="DetailName">
            {usr?.Title}
          </Typography>
          <List className="CardList">
            <ListItem className="CardListItem">
              <Typography className="cardLeftItem">ImdbRating:</Typography>
              <Typography className="cardRightItem">
                {usr?.imdbRating}
              </Typography>
            </ListItem>
            <ListItem className="CardListItem">
              <Typography className="cardLeftItem">Year:</Typography>
              <Typography className="cardRightItem">{usr?.Year}</Typography>
            </ListItem>
            <ListItem className="CardListItem">
              <Typography className="cardLeftItem">Running Time:</Typography>
              <Typography className="cardRightItem">{usr?.Runtime}</Typography>
            </ListItem>
            <ListItem className="CardListItem">
              <Typography className="cardLeftItem">Directed By:</Typography>
              <Typography className="cardRightItem">{usr?.Director}</Typography>
            </ListItem>
            <ListItem className="CardListItem">
              <Typography className="cardLeftItem">Awards:</Typography>
              <Typography className="cardRightItem">{usr?.Awards}</Typography>
            </ListItem>
          </List>
          {/* <Typography variant="h5" className="DetailDec">
            {usr?.Title}
          </Typography> */}
          <div className="ButtonWrap">
            <Button variant="contained" className="PlayButton">
              Play Movie
            </Button>
            <Button className="TailorButton" variant="outlined">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
