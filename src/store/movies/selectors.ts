import { AppStateType } from '../store';

export const getMovieList = (state: AppStateType) =>
  state.movies.movieList.results;
