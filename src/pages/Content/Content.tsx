import React from 'react';
import { Outlet } from 'react-router';
import { Container, ContentTitle } from './Styled';

export const Content: React.FC = () => {
  return (
    <Container>
      <ContentTitle>Content</ContentTitle>

      <Outlet />
    </Container>
  );
};
