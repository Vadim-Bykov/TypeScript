import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';
import * as actionTypes from './actionTypes';

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Object;
  phone: string;
  website: string;
  company: Object;
};

export type TSetTitle = {
  type: typeof actionTypes.MAIN_SET_TITLE;
  title: string;
};

export type TSetUsers = {
  type: typeof actionTypes.MAIN_SET_USERS;
  users: Array<TUser>;
};

export type TActions = TSetTitle | TSetUsers;

export type ThunkType = ThunkAction<void, AppStateType, unknown, Action>;

// export type LangType = {
//   [en: string]: string;
//   ru: string;
//   de: string;
// };
