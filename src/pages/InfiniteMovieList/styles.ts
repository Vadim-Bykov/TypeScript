import styled from 'styled-components';
import { breakpoints } from '../../consts/breakpoints';

export const InfinityMovieListWrapper = styled.div``;
export const Title = styled.h2``;
export const InfinityMovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  margin: 20px -5px;
`;

export const MovieBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 25%;
  padding: 10px;

  @media ${breakpoints.device.lg} {
    flex-basis: 33%;
  }

  @media ${breakpoints.device.sm} {
    flex-basis: 50%;
  }
  @media ${breakpoints.device.xs} {
    flex-basis: 100%;
  }
`;
export const Poster = styled.img`
  width: 100%;
`;
