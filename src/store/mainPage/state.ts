import { TUser } from "./types";

export const initialState = {
  title: 'Hello',
  users: [] as Array<TUser>,
};

export type initialStateType = typeof initialState;
