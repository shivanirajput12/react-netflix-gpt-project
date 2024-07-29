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
            title={"Now Playing Movies"}
            movies={movies.addNowPlayingMovies}
          />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />

          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
