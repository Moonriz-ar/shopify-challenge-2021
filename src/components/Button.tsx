import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps,
} from "./plasmic/the_shoppies/PlasmicButton";
import {
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps,
} from "@plasmicapp/react-web";

export interface ButtonProps extends DefaultButtonProps {
  onClick: () => void;
}
function Button_(props: ButtonProps) {
  const { onClick } = props;
  return <PlasmicButton {...props} onClick={onClick} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Button = React.forwardRef(Button_) as any as ButtonComponentType;

export default Object.assign(Button, {
  __plumeType: "button",
});
