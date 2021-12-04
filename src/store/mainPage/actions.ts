import * as actionTypes from './actionTypes';

export const setTitle = (title: string) => ({
  type: actionTypes.MAIN_SET_TITLE,
  title,
});

export const setUsers = (users: Array<Object>) => ({
  type: actionTypes.MAIN_SET_USERS,
  users,
});
