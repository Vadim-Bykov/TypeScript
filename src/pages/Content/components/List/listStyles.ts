import styled from 'styled-components';
import { breakpoints } from '../../../../consts/breakpoints';

export const ListContainer = styled.div``;
export const ListTitle = styled.h2``;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px -5px;
`;

export const ImageWrap = styled.div`
  flex: 0 1 25%;
  padding: 5px 5px;
  justify-content: center;

  @media ${breakpoints.device.sm} {
    flex: 0 1 33%;
  }

  @media ${breakpoints.device.xs} {
    flex: 0 1 50%;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  /* if we need fixed size with flex-wrap */
  /* width: 25%; */
  /* max-width: 250px; */
  /* flex: 0 1 25%;
  padding: 5px 5px; */
`;
