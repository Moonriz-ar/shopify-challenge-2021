import { proxy } from "valtio";
import { devtools } from "valtio/utils";

// types
export type MovieQueryString = string;

export interface MovieAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  poster_path: string;
  release_date: Date;
  title: string;
}

// store
export const movieStore = proxy<{
  movieQueryString: MovieQueryString;
  nominatedMovies: Movie[];
  searchedMovies: Movie[];
}>({
  movieQueryString: "",
  nominatedMovies: [],
  searchedMovies: [],
});

// enable redux devtools extension
const unsub = devtools(movieStore, { name: "movieStore", enabled: true });

// actions
export const setMovieQueryString = (query: string) => {
  movieStore.movieQueryString = query;
};

export const setSearchedMovies = (movies: MovieAPI[]) => {
  movieStore.searchedMovies = movies.map((movie) => {
    return {
      id: movie.id,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
    };
  });
};

export const clearSearchedMovies = () => {
  movieStore.movieQueryString = "";
  movieStore.searchedMovies = [];
};

export const addNominatedMovie = (movie: Movie) => {
  movieStore.nominatedMovies.push(movie);
};

export const removeNominatedMovie = (id: number) => {
  movieStore.nominatedMovies = movieStore.nominatedMovies.filter(
    (movie) => movie.id !== id
  );
};

export const clearNominatedMovies = () => {
  movieStore.nominatedMovies = [];
};
