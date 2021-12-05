import * as actionTypes from './actionTypes';
import { MovieData } from './types';

export const setMovieList = (movieList: MovieData) => ({
  type: actionTypes.MOVIES_SET_MOVIE_LIST,
  movieList,
});
