import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterpath }) => {
  console.log(posterpath);
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterpath} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
