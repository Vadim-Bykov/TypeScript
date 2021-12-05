import { TActions } from './types';
import * as actionTypes from './actionTypes';
import { initialState, initialStateType } from './state';

const moviesReducer = (
  state = initialState,
  action: TActions
): initialStateType => {
  switch (action.type) {
    case actionTypes.MOVIES_SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList,
      };

    default:
      return state;
  }
};

export default moviesReducer;
