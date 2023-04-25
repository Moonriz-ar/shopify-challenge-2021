import * as React from "react";
import {
  PlasmicMovieItemIcon,
  DefaultMovieItemIconProps,
} from "./plasmic/the_shoppies/PlasmicMovieItemIcon";

export interface MovieItemIconProps extends DefaultMovieItemIconProps {}

function MovieItemIcon_(props: MovieItemIconProps) {
  return <PlasmicMovieItemIcon {...props} />;
}

const MovieItemIcon = React.forwardRef(MovieItemIcon_);
export default MovieItemIcon;
