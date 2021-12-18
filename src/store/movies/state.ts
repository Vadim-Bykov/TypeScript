import { MovieData, TCollection } from './types';

export const initialState = {
  movieList: {} as MovieData,
  collection: {} as TCollection,
};

export type initialStateType = typeof initialState;
