import { getMovies } from '../../api/moviesApt';
import { setMovieList } from './actions';
import { MovieData, ThunkType } from './types';

// export const requestUsersData = (): ThunkType => async (dispatch) => {
//   const users = await getUsersAPI();
//   dispatch(setUsers(users));
// };

export const requestMovieList =
  (genre: string): ThunkType =>
  async (dispatch) => {
    try {
      const movieList: MovieData = await getMovies(genre);
      dispatch(setMovieList(movieList));
    } catch (error) {
      console.error(error);
    }
  };
