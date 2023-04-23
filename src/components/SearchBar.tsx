import * as React from "react";
import {
  PlasmicSearchBar,
  DefaultSearchBarProps,
} from "./plasmic/the_shoppies/PlasmicSearchBar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface SearchBarProps extends DefaultSearchBarProps {}

function SearchBar_(props: SearchBarProps, ref: HTMLElementRefOf<"div">) {
  return <PlasmicSearchBar root={{ ref }} {...props} />;
}

const SearchBar = React.forwardRef(SearchBar_);
export default SearchBar;
