import * as React from "react";
import {
  PlasmicNominationsMovieItem,
  DefaultNominationsMovieItemProps,
} from "./plasmic/the_shoppies/PlasmicNominationsMovieItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface NominationsMovieItemProps
  extends DefaultNominationsMovieItemProps {}

function NominationsMovieItem_(
  props: NominationsMovieItemProps,
  ref: HTMLElementRefOf<"div">
) {
  return <PlasmicNominationsMovieItem root={{ ref }} {...props} />;
}

const NominationsMovieItem = React.forwardRef(NominationsMovieItem_);
export default NominationsMovieItem;
