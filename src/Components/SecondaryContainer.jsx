import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.addNowPlayingMovies && (
      <div className=" bg-black">
        <div className="pl-10 -mt-52 z-20 relative">
          <MovieList
            title={"Now Playing"}
            movies={movies.addNowPlayingMovies}
          />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending "} movies={movies.addNowPlayingMovies} />

          <MovieList title={"Upcoming"} movies={movies.addNowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
