import { Button } from '@mui/material';
import styled from 'styled-components';

export const CollectionWrap = styled.div``;

interface TitleProps {
  isColor: boolean;
}

export const Title = styled.h3<TitleProps>`
  font-weight: bold;
  font-style: italic;
  color: ${({ isColor }) => isColor && '#ee1883'};
  transition: color 0.3s ease-in-out;
`;

export const RQTitle = styled(Title)`
  color: ${({ isColor }) => isColor && '#1883'};
`;

export const SButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  transition: all 0.1s ease-in-out;

  :hover {
    /* background-color: blue; */
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.9);
  }
`;

export const ButtonUI = styled(Button)`
  color: blue;
`;
