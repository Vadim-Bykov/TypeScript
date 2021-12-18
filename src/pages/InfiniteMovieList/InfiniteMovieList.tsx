import { Button } from '@mui/material';
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import * as api from '../../api/moviesApt';
import { BASE_IMAGE_URL, DEFAULT_MOVIE_IMAGE } from '../../consts/consts';
import {
  InfinityMovieListContainer,
  InfinityMovieListWrapper,
  MovieBlock,
  Poster,
  Title,
} from './styles';
import { TMovie } from './types';

export const InfiniteMovieList = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['infiniteMovieList'],
    api.getInfinityList,
    { getNextPageParam: (prevPge) => prevPge.next }
  );

  console.log({ hasNextPage, data });

  return (
    <InfinityMovieListWrapper>
      <Title>InfiniteMovieList</Title>
      <InfinityMovieListContainer>
        {data?.pages.map((page) => (
          <>
            {page.data.results.map((movie: TMovie) => (
              <MovieBlock>
                <Poster
                  src={
                    movie?.poster_path
                      ? `${BASE_IMAGE_URL}w500${movie?.poster_path}`
                      : DEFAULT_MOVIE_IMAGE
                  }
                />
                {movie.title}
              </MovieBlock>
            ))}
          </>
        ))}
      </InfinityMovieListContainer>
      <Button onClick={() => hasNextPage && fetchNextPage()}>Next</Button>
    </InfinityMovieListWrapper>
  );
};
