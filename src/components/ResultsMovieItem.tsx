import * as React from "react";
import { PlasmicResultsMovieItem } from "./plasmic/the_shoppies/PlasmicResultsMovieItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { Movie, addNominatedMovie, movieStore } from "../valtio/movieStore";
import { useSnapshot } from "valtio";

export interface ResultsMovieItemProps {
  movie: Movie;
}

function ResultsMovieItem_(
  { movie, ...props }: ResultsMovieItemProps,
  ref: HTMLElementRefOf<"div">
) {
  const snap = useSnapshot(movieStore);

  const movieTitle = `${movie.title} (${movie.release_date.slice(0, 4)})`;
  const isNominatedListFull = snap.nominatedMovies.length >= 5;
  const isNominated = snap.nominatedMovies.some(
    (nominated) => nominated.id === movie.id
  );
  const isDisabled = isNominatedListFull || isNominated ? true : false;

  const onClickAdd = () => {
    if (isDisabled) {
      return;
    }
    addNominatedMovie(movie);
  };

  return (
    <PlasmicResultsMovieItem
      root={{ ref }}
      {...props}
      // variant prop
      disabled={isDisabled}
      // onClick override
      onClick={onClickAdd}
    >
      {movieTitle}
    </PlasmicResultsMovieItem>
  );
}

const ResultsMovieItem = React.forwardRef(ResultsMovieItem_);
export default ResultsMovieItem;
