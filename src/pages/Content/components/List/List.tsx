import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovieList } from '../../../../store/movies/operations';
import * as selectors from '../../../../store/movies/selectors';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import {
  FlexContainer,
  ListContainer,
  ListTitle,
  MovieImage,
  ImageWrap,
} from './listStyles';
import Details from '@mui/icons-material/Details';
import { BASE_IMAGE_URL } from '../../../../consts/consts';

export const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieList = useSelector(selectors.getMovieList);
  console.log(movieList);

  useEffect(() => {
    dispatch(requestMovieList('popular'));
  }, [dispatch]);

  return (
    <ListContainer>
      <ListTitle>List</ListTitle>
      <Button
        variant='contained'
        startIcon={<Details />}
        onClick={() => navigate('/content/580489')}
      >
        Details
      </Button>

      <FlexContainer>
        {movieList?.map((movie) => (
          <ImageWrap>
            <MovieImage
              src={`${BASE_IMAGE_URL}w500${movie.poster_path}`}
              onClick={() => navigate(`/content/${movie.id}`)}
            />
          </ImageWrap>
        ))}
      </FlexContainer>
    </ListContainer>
  );
};
