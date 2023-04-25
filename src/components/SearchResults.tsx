import * as React from "react";
import {
  PlasmicSearchResults,
  DefaultSearchResultsProps,
} from "./plasmic/the_shoppies/PlasmicSearchResults";

import { useQuery } from "@tanstack/react-query";

import { useSnapshot } from "valtio";
import { Movie, movieStore } from "../valtio/movieStore";
import ResultsMovieItem from "./ResultsMovieItem";

export interface SearchResultsProps extends DefaultSearchResultsProps {}

const fetchMovies = async (query: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_MOVIE_API_BASE_URL}/search/movie?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await response.json();

  return data.results.slice(0, 10);
};

function SearchResults_(props: SearchResultsProps) {
  const snap = useSnapshot(movieStore);
  const { isLoading, isError, data, error } = useQuery<Movie[], Error>({
    queryKey: ["movies", snap.movieQueryString],
    queryFn: () => fetchMovies(snap.movieQueryString),
  });

  const title = snap.movieQueryString
    ? `Search results for ${snap.movieQueryString}`
    : "Search results will appear here";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <PlasmicSearchResults
      {...props}
      movieItemsContainer={{
        children: data.map((movie) => {
          return <ResultsMovieItem movie={movie} />;
        }),
      }}
      // populate slots
      args={{
        title,
      }}
    />
  );
}

const SearchResults = React.forwardRef(SearchResults_);
export default SearchResults;
