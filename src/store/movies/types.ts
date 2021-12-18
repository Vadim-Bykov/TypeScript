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

export interface TPart {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TCollection {
  id: number;
  name: string;
  overview: string;
  poster_path: null | string;
  backdrop_path: string;
  parts: TPart[];
}

export type TSetCollection = {
  type: typeof actionTypes.MOVIES_SET_COLLECTION;
  collection: TCollection;
};

export type TActions = TSetMovieList | TSetCollection;

export type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;

// export type LangType = {
//   [en: string]: string;
//   ru: string;
//   de: string;
// };
