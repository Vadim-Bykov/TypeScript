import React from 'react';
import { Button } from '@mui/material';
import { ItemContainer, ItemTitle, MovieImage, ImageWrap } from './movieStyles';
import List from '@mui/icons-material/List';
import Person from '@mui/icons-material/Person';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import { BASE_IMAGE_URL } from '../../../../consts/consts';
import { getDetails } from '../../../../api/moviesApt';
import { TextContent } from './components/TextContent';

export const Item = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data: movieData } = useQuery(['movieDetails', params.id], () =>
    getDetails(params.id)
  );

  console.log(movieData);

  if (!movieData) return null;

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

      <TextContent
        title={movieData.title}
        overview={movieData.overview}
        popularity={movieData.popularity}
      />

      <Button
        variant='contained'
        startIcon={<Person />}
        onClick={() => navigate(`/content/actors/${params.id}`)}
      >
        Details
      </Button>

      <Button
        variant='contained'
        startIcon={<Person />}
        onClick={() =>
          navigate(`/content/collection/${movieData.belongs_to_collection?.id}`)
        }
      >
        Collection
      </Button>

      {/* <Outlet /> */}
    </ItemContainer>
  );
};
