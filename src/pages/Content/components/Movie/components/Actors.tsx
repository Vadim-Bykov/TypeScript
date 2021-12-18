import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getCastInfo } from '../../../../../api/moviesApt';
import { BASE_IMAGE_URL, DEFAULT_AVATAR } from '../../../../../consts/consts';
import {
  ActorBlock,
  ActorImage,
  ActorsContainer,
  ActorsWrap,
  ItemTitle,
} from '../movieStyles';

interface TActorInfo {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export const Actors = () => {
  const params = useParams();

  const { data: castInfo } = useQuery(['castInfo', params?.id], () =>
    getCastInfo(params?.id)
  );

  // console.log({ params, castInfo });

  const castData: TActorInfo[] = castInfo?.cast;

  return (
    <ActorsWrap>
      <ItemTitle>Actors</ItemTitle>

      <ActorsContainer>
        {castData?.map((actor) => (
          <ActorBlock key={actor.id}>
            <ActorImage
              src={
                actor?.profile_path
                  ? `${BASE_IMAGE_URL}w300${actor?.profile_path}`
                  : DEFAULT_AVATAR
              }
            />
          </ActorBlock>
        ))}
      </ActorsContainer>
    </ActorsWrap>
  );
};
