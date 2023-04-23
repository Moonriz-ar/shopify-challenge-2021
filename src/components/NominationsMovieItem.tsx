import * as React from "react";
import {
  PlasmicNominationsMovieItem,
  DefaultNominationsMovieItemProps,
} from "./plasmic/the_shoppies/PlasmicNominationsMovieItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import { removeNominatedMovie } from "../valtio/movieStore";

export interface NominationsMovieItemProps
  extends DefaultNominationsMovieItemProps {
  id: number;
}

function NominationsMovieItem_(
  { id, ...props }: NominationsMovieItemProps,
  ref: HTMLElementRefOf<"div">
) {
  const onClickRemove = () => {
    removeNominatedMovie(id);
  };
  return (
    <PlasmicNominationsMovieItem
      root={{ ref }}
      {...props}
      onClick={onClickRemove}
    />
  );
}

const NominationsMovieItem = React.forwardRef(NominationsMovieItem_);
export default NominationsMovieItem;
