import styled from 'styled-components';
import { Link } from 'react-router-dom';

// SUBMENU ITEMS
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
  }
`;

export const ItemLink = styled(Link)`
  &:hover {
    background: rgba(#000, 0.1);
  }
`;

// NAVBAR ITEMS
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  a {
    line-height: inherit;
  }
`;

export const NavItemContainer = styled.ul`
  a {
    color: #fff;
    &:hover {
      color: #3c64b1;
    }
  }
`;

export const NavItem = styled.li`
  width: calc(90px * 0.8);
  display: inline-block;
  position: relative;
  align-items: center;
  justify-content: center;

  &:hover {

    ${NavSubMenuContainer} {
      display: block;
    }
  }
`;

export const NavLink = styled(Link)`
  transition: filter 300ms;
  display: block;
`;

export const LogoLink = styled(Link)`
  margin-right: 5em;
  display: flex;
`;

export const MobileLogoLink = styled.div`
  a {
      padding: 0;
      margin: 0;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
  max-width: 1172px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 2em;
`;

export const SearchContainer = styled.div`
  padding: 0.5em 1.5em;
`;
