import { breakpoints } from '../../../../consts/breakpoints';
import styled from 'styled-components';

export const ItemContainer = styled.div``;

export const ItemTitle = styled.h2``;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px -5px;
`;

export const MovieImage = styled.img`
  display: flex;
  width: 100%;
  max-width: 700px;

  @media ${breakpoints.device.sm} {
    max-width: 500px;
  }
`;

export const ActorsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ActorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -10px;
`;

export const ActorBlock = styled.div`
  display: flex;
  flex: 0 1 25%;
  padding: 10px;

  @media ${breakpoints.device.lg} {
    flex-basis: 33%;
  }

  @media ${breakpoints.device.sm} {
    flex-basis: 50%;
    padding: 5px;
  }

  @media ${breakpoints.device.xs} {
    flex-basis: 100%;
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  background-color: blue;
`;
