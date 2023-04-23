import * as React from "react";
import {
  PlasmicMovieItem,
  DefaultMovieItemProps,
} from "./plasmic/the_shoppies/PlasmicMovieItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface MovieItemProps extends DefaultMovieItemProps {}

function MovieItem_(props: MovieItemProps, ref: HTMLElementRefOf<"div">) {
  return <PlasmicMovieItem root={{ ref }} {...props} />;
}

const MovieItem = React.forwardRef(MovieItem_);
export default MovieItem;
