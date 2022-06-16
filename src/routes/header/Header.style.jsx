import styled from 'styled-components';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navlinks = styled.nav`
  /* width: 20%; */
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
