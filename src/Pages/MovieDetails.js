import React from "react";
import Appbar from "../Components/Appbar";
import CardDetails from "../Components/CardDetails";

const MovieDetails = () => {
  const { usr } = window.history.state;
  return (
    <div className="MainWrap">
      <Appbar />
      <CardDetails usr={usr} />
    </div>
  );
};

export default MovieDetails;
