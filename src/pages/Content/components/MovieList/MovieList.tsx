import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { requestMovieList } from '../../../../store/movies/operations';
// import * as selectors from '../../../../store/movies/selectors';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import {
  FlexContainer,
  ListContainer,
  ListTitle,
  MovieImage,
  ImageWrap,
} from './movieListStyles';
import Details from '@mui/icons-material/Details';
import { BASE_IMAGE_URL, DEFAULT_MOVIE_IMAGE } from '../../../../consts/consts';
import { useQuery, useQueryClient } from 'react-query';
import * as api from '../../../../api/moviesApt';
import { MovieData } from '../../../../store/movies/types';

export const MovieList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();
  // const movieList = useSelector(selectors.getMovieList);
  // useEffect(() => {
  //   dispatch(requestMovieList('popular'));
  // }, [dispatch]);

  const queryClient = useQueryClient();
  const { data } = useQuery<MovieData>(
    ['list', page],
    () => api.getMovies({ page }),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (data?.total_pages && data?.total_pages > page) {
      queryClient.prefetchQuery(['list', page + 1], () =>
        api.getMovies({ page: page + 1 })
      );
    }
  }, [data?.total_pages, page, queryClient]);

  return (
    <ListContainer>
      <ListTitle>List</ListTitle>
      <ListTitle>{page}</ListTitle>
      <Button
        variant='contained'
        startIcon={<Details />}
        onClick={() => navigate('/content/580489')}
      >
        Details
      </Button>

      <FlexContainer>
        {data?.results.map((movie) => (
          <ImageWrap key={movie.id}>
            <MovieImage
              src={
                movie.poster_path
                  ? `${BASE_IMAGE_URL}w500${movie.poster_path}`
                  : DEFAULT_MOVIE_IMAGE
              }
              onClick={() => navigate(`/content/${movie.id}`)}
            />
          </ImageWrap>
        ))}
      </FlexContainer>
      <Button
        variant='contained'
        startIcon={<Details />}
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page <= 1}
      >
        Prev
      </Button>
      <Button
        variant='contained'
        startIcon={<Details />}
        onClick={() => setPage((prev) => prev + 1)}
        disabled={!(data?.total_pages && data?.total_pages >= page)}
      >
        Next
      </Button>
    </ListContainer>
  );
};
