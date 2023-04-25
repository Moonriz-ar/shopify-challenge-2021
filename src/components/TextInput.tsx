import * as React from "react";
import {
  PlasmicTextInput,
  DefaultTextInputProps,
} from "./plasmic/the_shoppies/PlasmicTextInput";

export interface TextInputProps extends DefaultTextInputProps {
  // Feel free to add any additional props that this component should receive
}
function TextInput_(props: TextInputProps) {
  return <PlasmicTextInput {...props} />;
}

const TextInput = React.forwardRef(TextInput_);

export default Object.assign(TextInput, {
  __plumeType: "text-input",
});
