import { AppStateType } from '../store';

export const getTitle = (state: AppStateType) => state.main.title;
export const getUsers = (state: AppStateType) => state.main.users;
