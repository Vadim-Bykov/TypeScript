import * as api from '../../api/moviesApt';
import { setMovieList, setCollection } from './actions';
import { MovieData, TCollection, ThunkType } from './types';

// export const requestUsersData = (): ThunkType => async (dispatch) => {
//   const users = await getUsersAPI();
//   dispatch(setUsers(users));
// };

export const requestMovieList =
  (genre: string): ThunkType =>
  async (dispatch) => {
    try {
      const movieList: MovieData = await api.getMovies({ genre });
      dispatch(setMovieList(movieList));
    } catch (error) {
      console.error(error);
    }
  };

export const requestCollection =
  (id: string | undefined): ThunkType =>
  async (dispatch) => {
    try {
      const collection: TCollection = await api.getCollection(id);

      dispatch(setCollection(collection));
    } catch (error) {
      console.error(error);
    }
  };
