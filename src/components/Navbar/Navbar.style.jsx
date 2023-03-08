import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { NavSubMenuContainer } from './Submenu.style';

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
    /* font-weight: 800; */
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
      /* font-weight: 800; */
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
  /* height: 100%; */
  display: flex;
  /* h1 {
    margin: 0;
    margin-left: 0.5em;
    display: flex;
    align-items: center;
  } */
`;

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
  /* max-width: 1172px; */
  /* position: inherit;
  z-index: 1; */
  max-width: 1172px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 1.5em; */
  padding: 1em;
  /* padding: ${(props) => (props.isMobile ? '1em 1em' : '1em 0')}; */

`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 2em;
`;
