import { AppStateType } from '../store';
import { TCollection } from './types';

export const getMovieList = (state: AppStateType) =>
  state.movies.movieList.results;

export const getCollection: (state: AppStateType) => TCollection = (state) =>
  state.movies.collection;
