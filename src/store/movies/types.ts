import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';
import * as actionTypes from './actionTypes';

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
}

export interface MovieData {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export type TSetMovieList = {
  type: typeof actionTypes.MOVIES_SET_MOVIE_LIST;
  movieList: MovieData;
};

export type TActions = TSetMovieList;

export type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;

// export type LangType = {
//   [en: string]: string;
//   ru: string;
//   de: string;
// };
