import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a72c9cd11375413053bccd6b3e6aaefe',
  },
});

export const getMovies = (genre: string) =>
  instance.get(`movie/${genre}`).then((response) => response.data);

export const getDetails = (movieId: string | undefined) =>
  instance.get(`movie/${movieId}`).then((response) => response.data);
