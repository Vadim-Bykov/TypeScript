import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as api from '../../../../../../api/moviesApt';
import {
  ButtonUI,
  CollectionWrap,
  RQTitle,
  SButton,
  Title,
} from './collectionStyles';
import * as selectors from '../../../../../../store/movies/selectors';
import * as operations from '../../../../../../store/movies/operations';
import { TCollection } from '../../../../../../store/movies/types';

export const Collection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const collection: TCollection = useSelector(selectors.getCollection);
  const [isColor, toggleIsColor] = useState<boolean>(false);

  const { data: collection_1 } = useQuery<TCollection>(
    ['collection', params.id],
    () => api.getCollection(params.id)
  );

  useEffect(() => {
    dispatch(operations.requestCollection(params.id));
  }, [dispatch, params.id]);

  console.log({ collection_1, collection });

  const toggle = () => {
    toggleIsColor((prev) => !prev);
  };

  return (
    <CollectionWrap>
      <Title isColor={isColor}>{collection.name}</Title>
      <RQTitle isColor={isColor}>{collection_1?.name}</RQTitle>

      <SButton onClick={toggle}>Change color</SButton>
      <ButtonUI
        onClick={toggle}
        variant='outlined'
        color='success'
        size='small'
        sx={{ color: 'red', borderRadius: 15 }}
      >
        ButtonUI
      </ButtonUI>
    </CollectionWrap>
  );
};
