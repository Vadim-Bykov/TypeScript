import * as actionTypes from './actionTypes';
import { MovieData, TCollection } from './types';

export const setMovieList = (movieList: MovieData) => ({
  type: actionTypes.MOVIES_SET_MOVIE_LIST,
  movieList,
});

export const setCollection = (collection: TCollection) => ({
  type: actionTypes.MOVIES_SET_COLLECTION,
  collection,
});
