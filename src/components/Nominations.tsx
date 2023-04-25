import * as React from "react";
import {
  PlasmicNominations,
  DefaultNominationsProps,
} from "./plasmic/the_shoppies/PlasmicNominations";

import { useSnapshot } from "valtio";
import { movieStore, clearNominatedMovies } from "../valtio/movieStore";
import NominationsMovieItem from "./NominationsMovieItem";

export interface NominationsProps extends DefaultNominationsProps {}

function Nominations_(props: NominationsProps) {
  const snap = useSnapshot(movieStore);

  const onClickClear = () => {
    clearNominatedMovies();
  };

  return (
    <PlasmicNominations
      {...props}
      // variant prop
      isEmpty={movieStore.nominatedMovies.length === 0}
      // override
      movieItemsContainer={{
        children: snap.nominatedMovies.map((movie) => {
          const movieTitle = `${movie.title} (${movie.release_date.slice(
            0,
            4
          )})`;

          return (
            <NominationsMovieItem id={movie.id}>
              {movieTitle}
            </NominationsMovieItem>
          );
        }),
      }}
      clearNominations={{
        onClick: onClickClear,
      }}
    />
  );
}

const Nominations = React.forwardRef(Nominations_);
export default Nominations;
