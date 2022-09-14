import { Outlet, useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import * as route from '../../constants/routes';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import {
  NavContainer,
  AuthContainer,
  LogoLink,
  NavItem,
  NavLink,
  NavItemContainer,
  HeaderContainer,
  NavSubMenuContainer,
  ItemLink,
  SubMenuItem
} from './Navbar.style';
import SearchNavbar from '../SearchBar/SearchNavbar';

function Navbar() {
  const location = useLocation();

  return (
    <>
      {console.log('location', location)}
      <HeaderContainer>
        <NavContainer>
          <LogoLink to="/">
            <Logo />
          </LogoLink>

          <NavItemContainer>
            <NavItem>
              <NavLink to={route.HOME}>Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to={route.MOVIES}>Movies</NavLink>
              <NavSubMenuContainer>
                <SubMenuItem>
                  <ItemLink to={route.MOVIES}>Top Movies</ItemLink>
                </SubMenuItem>
                <SubMenuItem>
                  <ItemLink to={route.MOVIES}>Popular</ItemLink>
                </SubMenuItem>
                <SubMenuItem>
                  <ItemLink to={route.MOVIES}>Upcomming</ItemLink>
                </SubMenuItem>
              </NavSubMenuContainer>
            </NavItem>
            <NavItem>
              <NavLink to={route.TVSHOWS}>Tv Shoes</NavLink>
            </NavItem>
          </NavItemContainer>
        </NavContainer>

        <AuthContainer>
          {location.pathname !== '/' && <SearchNavbar />}
          <Button primary>Sign in</Button>
        </AuthContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default Navbar;
