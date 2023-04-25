import * as React from "react";
import {
  PlasmicSearchBar,
  DefaultSearchBarProps,
} from "./plasmic/the_shoppies/PlasmicSearchBar";

import { setMovieQueryString } from "../valtio/movieStore";

export interface SearchBarProps extends DefaultSearchBarProps {}

function SearchBar_(props: SearchBarProps) {
  const [text, setText] = React.useState("");

  const onClickSearch = () => {
    setMovieQueryString(text);
  };

  const onClickClearSearch = () => {
    setMovieQueryString("");
    setText("");
  };

  return (
    <PlasmicSearchBar
      {...props}
      textInput={{
        value: text,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        },
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            setMovieQueryString(text);
          }
        },
      }}
      searchButton={{
        onClick: onClickSearch,
      }}
      clearSearchButton={{
        onClick: onClickClearSearch,
      }}
    />
  );
}

const SearchBar = React.forwardRef(SearchBar_);
export default SearchBar;
