import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps,
} from "./plasmic/the_shoppies/PlasmicButton";

export interface ButtonProps extends DefaultButtonProps {
  onClick: () => void;
}
function Button_(props: ButtonProps) {
  const { onClick } = props;
  return <PlasmicButton {...props} onClick={onClick} />;
}

const Button = React.forwardRef(Button_);

export default Button;
