import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a72c9cd11375413053bccd6b3e6aaefe',
  },
});

type TPathParams = string | undefined;

export const getMovies = ({ genre = 'popular', page = 1 }) =>
  instance
    .get(`movie/${genre}`, { params: { page } })
    .then((response) => response.data);

export const getDetails = (movieId: TPathParams) =>
  instance.get(`movie/${movieId}`).then((response) => response.data);

export const getCastInfo = (movieId: TPathParams) =>
  instance.get(`movie/${movieId}/credits`).then((response) => response.data);

export const getCollection = (collectionId: TPathParams) =>
  instance.get(`collection/${collectionId}`).then((response) => response.data);

export const getInfinityList = ({ pageParam = 1, ...props }) =>
  instance
    .get(`movie/${props.queryKey[1]}`, { params: { page: pageParam } })
    .then((response) => ({
      data: response.data,
      next: response.data.total_pages > pageParam ? pageParam + 1 : false,
    }));
