import { TActions } from './types';
import * as actionTypes from './actionTypes';
import { initialState, initialStateType } from './state';

const mainReducer = (
  state = initialState,
  action: TActions
): initialStateType => {
  switch (action.type) {
    case actionTypes.MAIN_SET_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case actionTypes.MAIN_SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};

export default mainReducer;
