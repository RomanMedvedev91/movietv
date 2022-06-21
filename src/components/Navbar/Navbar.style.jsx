import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavSubMenuContainer } from './Submenu.style';

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
      font-weight: 800;
    }
  }
`;

export const NavItem = styled.li`
  width: calc(90px * 0.8);
  /* display: flex; */
  display: inline-block;
  position: relative;
  align-items: center;
  justify-content: center;

  &:hover {
    /* color: #3c64b1;
    font-weight: 800; */

    ${NavSubMenuContainer} {
      display: block;
    }
  }
`;

export const NavLink = styled(Link)`
  transition: filter 300ms;
`;

export const LogoLink = styled(Link)`
  margin-right: 5em;
  height: 100%;
  display: flex;
  h1 {
    margin: 0;
    margin-left: 0.5em;
    display: flex;
    align-items: center;
  }
`;

export const AuthContainer = styled.div``;
