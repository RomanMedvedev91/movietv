import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
  /* max-width: 1172px; */
  /* position: inherit;
  z-index: 1; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  padding: 1em 0 1em 0;
`;

export const Navlinks = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a:hover {
    color: #3c64b1;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const LogoLink = styled(Link)`
  height: 100%;
`;

export const AuthContainer = styled.div``;
