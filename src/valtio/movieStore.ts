import { proxy, subscribe } from "valtio";
import { devtools } from "valtio/utils";

// types
export type MovieQueryString = string;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// store with local storage
const storedMovieStore = localStorage.getItem("movieStore");

export const movieStore = proxy<{
  movieQueryString: MovieQueryString;
  nominatedMovies: Movie[];
}>(
  storedMovieStore
    ? JSON.parse(storedMovieStore)
    : { movieQueryString: "", nominatedMovies: [] }
);

subscribe(movieStore, () => {
  localStorage.setItem("movieStore", JSON.stringify(movieStore));
});

// enable redux devtools extension
const unsub = devtools(movieStore, { name: "movieStore", enabled: true });

// actions
export const setMovieQueryString = (query: string) => {
  movieStore.movieQueryString = query;
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
