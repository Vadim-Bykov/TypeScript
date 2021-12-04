import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLinkWrap = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-left: 50px;
  a:hover {
    color: rgb(40, 236, 14);
    text-decoration: none;
  }
  a:active {
    color: red;
    text-decoration: none;
  }
`;
