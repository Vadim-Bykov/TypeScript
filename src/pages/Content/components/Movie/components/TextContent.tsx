import React from 'react';
import {
  TextContainer,
  Title,
  Overview,
  Popularity,
} from './textContentStyles';

interface TTextContent {
  title: string;
  overview: string;
  popularity: number;
}

export const TextContent: React.FC<TTextContent> = ({
  title,
  overview,
  popularity,
}) => {
  return (
    <TextContainer>
      <Title color='#e0ee18'>{title}</Title>
      <Overview>{overview}</Overview>
      <Popularity count={popularity}>{popularity}</Popularity>
    </TextContainer>
  );
};
