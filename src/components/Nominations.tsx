import * as React from "react";
import {
  PlasmicNominations,
  DefaultNominationsProps,
} from "./plasmic/the_shoppies/PlasmicNominations";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { useSnapshot } from "valtio";
import { movieStore } from "../valtio/movieStore";
import NominationsMovieItem from "./NominationsMovieItem";

export interface NominationsProps extends DefaultNominationsProps {}

function Nominations_(props: NominationsProps, ref: HTMLElementRefOf<"div">) {
  const snap = useSnapshot(movieStore);

  return (
    <PlasmicNominations
      root={{ ref }}
      {...props}
      movieItemsContainer={{
        children: snap.nominatedMovies.map((movie) => {
          const movieTitle = `${movie.title} (${movie.release_date.slice(
            0,
            4
          )})`;

          return <NominationsMovieItem>{movieTitle}</NominationsMovieItem>;
        }),
      }}
    />
  );
}

const Nominations = React.forwardRef(Nominations_);
export default Nominations;
