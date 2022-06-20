import { Link } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NavSubMenuContainer = styled.ul`
  text-transform: none;
  display: none;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  background-color: none;
`;

export const SubMenuItem = styled.li`
  margin: 0.5em;
  &:hover {
    background: rgba(#000, 0.1);
    font-weight: 800;
  }
`;

export const ItemLink = styled(Link)`
  &:hover {
    background: rgba(#000, 0.1);
  }
`;
