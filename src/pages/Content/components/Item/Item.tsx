import React from 'react';
import { Button } from '@mui/material';
import { ItemContainer, ItemTitle, MovieImage, ImageWrap } from './itemStyles';
import List from '@mui/icons-material/List';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import { BASE_IMAGE_URL } from '../../../../consts/consts';
import { getDetails } from '../../../../api/moviesApt';

export const Item = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data: movieData } = useQuery(['movieDetails', params.id], () =>
    getDetails(params.id)
  );

  return (
    <ItemContainer>
      <ItemTitle>Item: {params.id}</ItemTitle>
      <Button
        variant='contained'
        startIcon={<List />}
        onClick={() => navigate('/content')}
      >
        List
      </Button>

      <ImageWrap>
        <MovieImage src={`${BASE_IMAGE_URL}w500${movieData?.poster_path}`} />
      </ImageWrap>
    </ItemContainer>
  );
};
