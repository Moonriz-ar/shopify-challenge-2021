import * as React from "react";
import {
  PlasmicNominations,
  DefaultNominationsProps,
} from "./plasmic/the_shoppies/PlasmicNominations";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface NominationsProps extends DefaultNominationsProps {}

function Nominations_(props: NominationsProps, ref: HTMLElementRefOf<"div">) {
  return <PlasmicNominations root={{ ref }} {...props} />;
}

const Nominations = React.forwardRef(Nominations_);
export default Nominations;
