import * as React from "react";
import {
  PlasmicMovieItemIcon,
  DefaultMovieItemIconProps,
} from "./plasmic/the_shoppies/PlasmicMovieItemIcon";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface MovieItemIconProps extends DefaultMovieItemIconProps {}

function MovieItemIcon_(
  props: MovieItemIconProps,
  ref: HTMLElementRefOf<"div">
) {
  return <PlasmicMovieItemIcon root={{ ref }} {...props} />;
}

const MovieItemIcon = React.forwardRef(MovieItemIcon_);
export default MovieItemIcon;
