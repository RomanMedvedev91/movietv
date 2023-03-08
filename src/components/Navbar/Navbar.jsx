import { Outlet, useLocation } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import * as route from '../../constants/routes';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { useMediaQuery } from '../../hooks/useMediaQuery.tsx';

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
  const { isMobile } = useMediaQuery();

  return (
    <>
      <HeaderContainer isMobile={isMobile}>
        <NavContainer>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          {!isMobile && (
            <NavItemContainer>
              <NavItem>
                <NavLink to={route.HOME}>Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to={route.VIEW_MOVIES}>Movies</NavLink>
                <NavSubMenuContainer>
                  <SubMenuItem>
                    <ItemLink to={route.VIEW_MOVIES_NOW_PLAYING}>Playing Now</ItemLink>
                  </SubMenuItem>

                  <SubMenuItem>
                    <ItemLink to={route.VIEW_MOVIES_UPCOMING}>Upcomming</ItemLink>
                  </SubMenuItem>

                  <SubMenuItem>
                    <ItemLink to={route.VIEW_MOVIES}>Popular</ItemLink>
                  </SubMenuItem>

                  <SubMenuItem>
                    <ItemLink to={route.VIEW_MOVIES_TOP_RATED}>Top Rated</ItemLink>
                  </SubMenuItem>
                </NavSubMenuContainer>
              </NavItem>

              <NavItem>
                <NavLink to={route.VIEW_TVSHOWS}>Tv Shoes</NavLink>
                <NavSubMenuContainer>
                  <SubMenuItem>
                    <ItemLink to={route.VIEW_TVSHOWS_AIRING_TODAY}>Airing Today</ItemLink>
                  </SubMenuItem>

                  <SubMenuItem>
                    <ItemLink to={route.VIEW_TVSHOWS_ON_TV}>On TV</ItemLink>
                  </SubMenuItem>

                  <SubMenuItem>
                    <ItemLink to={route.VIEW_TVSHOWS}>Popular</ItemLink>
                  </SubMenuItem>

                  <SubMenuItem>
                    <ItemLink to={route.VIEW_TVSHOWS_TOP_RATED}>Top Rated</ItemLink>
                  </SubMenuItem>
                </NavSubMenuContainer>
              </NavItem>
            </NavItemContainer>
          )}
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
