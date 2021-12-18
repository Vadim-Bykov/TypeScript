import styled from 'styled-components';
import { breakpoints } from '../../../../../consts/breakpoints';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TTitle {
  color: string;
}

export const Title = styled.h2<TTitle>`
  background-color: ${({ color }) => color};

  @media ${breakpoints.device.sm} {
    text-decoration: underline;
  }
`;

export const Overview = styled.div`
  text-align: justify;
`;

interface TPopularity {
  count: number;
}
export const Popularity = styled.div<TPopularity>`
  color: ${({ count }) => (count > 1000 ? '#ee1883' : 'inherited')};
`;
