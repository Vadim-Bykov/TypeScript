import { breakpoints } from './../../../../consts/breakpoints';
import styled from 'styled-components';
// import { Breakpoints } from '@mui/material/'
// '@material-ui/core/styles/createBreakpoints';

export const ItemContainer = styled.div``;

export const ItemTitle = styled.h2``;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MovieImage = styled.img`
  display: flex;
  width: 100%;
  max-width: 700px;
  margin: 20px 0;

  @media ${breakpoints.device.sm} {
    max-width: 500px;
  }
`;
