import { getUsersAPI } from '../../api/usersAPI';
import { setUsers } from './actions';
import { ThunkType } from './types';

export const requestUsersData = (): ThunkType => async (dispatch) => {
  const users = await getUsersAPI();
  dispatch(setUsers(users));
};
