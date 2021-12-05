import { MovieData } from './types';

export const initialState = {
  movieList: {} as MovieData,
};

export type initialStateType = typeof initialState;
