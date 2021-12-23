import { Button } from '@mui/material';
import React, { useState } from 'react';
import { BASE_IMAGE_URL, DEFAULT_MOVIE_IMAGE } from '../../consts/consts';
import { useInfiniteList, useScrollHandler } from './hooks/hooks';
import {
  InfinityMovieListContainer,
  InfinityMovieListWrapper,
  MovieBlock,
  Poster,
  Title,
} from './styles';
import { TMovie } from './types';

const mediaTitles = {
  [0 as number]: {
    type: 'popular',
    title: 'Popular',
  },
  1: {
    type: 'upcoming',
    title: 'Come soon',
  },
};

export const InfiniteMovieList = () => {
  const [isEndReached, setIsEndReached] = useState(false);
  const [mediaTypeIndex, setMediaTypeIndex] = useState(0);
  const mediaType = mediaTitles[mediaTypeIndex].type;

  const changeMediaType = () => {
    setMediaTypeIndex((prev) => (prev < 1 ? prev + 1 : 0));
  };

  const { data } = useInfiniteList({ isEndReached, mediaType });

  const { scrollRef } = useScrollHandler({ setIsEndReached });

  return (
    <InfinityMovieListWrapper
      ref={scrollRef}
      onEnded={() => {
        console.log('onEnded');
      }}
    >
      <Title>InfiniteMovieList</Title>
      <Button variant='contained' onClick={changeMediaType}>
        {mediaTitles[mediaTypeIndex].title}
      </Button>
      <InfinityMovieListContainer>
        {data?.pages.map((page) =>
          page.data.results.map((movie: TMovie) => (
            <MovieBlock key={movie.id}>
              <Poster
                src={
                  movie?.poster_path
                    ? `${BASE_IMAGE_URL}w500${movie?.poster_path}`
                    : DEFAULT_MOVIE_IMAGE
                }
              />
              {movie.title}
            </MovieBlock>
          ))
        )}
      </InfinityMovieListContainer>
    </InfinityMovieListWrapper>
  );
};
