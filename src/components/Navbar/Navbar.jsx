import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Button,
  Menu,
  Sidebar,
  Icon,
  Container,
} from 'semantic-ui-react';
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
  SubMenuItem,
  MobileLogoLink,
} from './Navbar.style';
import SearchNavbar from '../SearchBar/SearchNavbar';

const moviesLinks = [{
  routeLink: route.VIEW_MOVIES_NOW_PLAYING,
  title: 'Playing Now',
  id: 'PlayingNow'
}, {
  routeLink: route.VIEW_MOVIES_UPCOMING,
  title: 'Upcomming',
  id: 'Upcomming'
}, {
  routeLink: route.VIEW_MOVIES,
  title: 'Popular',
  id: 'moviesPopular'
}, {
  routeLink: route.VIEW_MOVIES_TOP_RATED,
  title: 'Top Rated',
  id: 'movieTopRated'
}];

const tvShowsLinks = [{
  routeLink: route.VIEW_TVSHOWS_AIRING_TODAY,
  title: 'Airing Today',
  id: 'iringToday'
}, {
  routeLink: route.VIEW_TVSHOWS_ON_TV,
  title: 'On TV',
  id: 'onTv'
}, {
  routeLink: route.VIEW_TVSHOWS,
  title: 'Popular',
  id: 'tvShowsPopular'
}, {
  routeLink: route.VIEW_TVSHOWS_TOP_RATED,
  title: 'Top Rated',
  id: 'tvShowsTopRated'
}];

function Navbar() {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const location = useLocation();
  const { isMobile } = useMediaQuery();

  const toggleBurger = () => {
    setBurgerVisible((prev) => !prev);
  };

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
                  {moviesLinks.map(({ id, title, routeLink }) => (
                    <SubMenuItem key={id}>
                      <ItemLink to={routeLink}>{title}</ItemLink>
                    </SubMenuItem>
                  ))}
                </NavSubMenuContainer>
              </NavItem>

              <NavItem>
                <NavLink to={route.VIEW_TVSHOWS}>Tv Shoes</NavLink>
                <NavSubMenuContainer>
                  {tvShowsLinks.map(({ id, title, routeLink }) => (
                    <SubMenuItem key={id}>
                      <ItemLink to={routeLink}>{title}</ItemLink>
                    </SubMenuItem>
                  ))}
                </NavSubMenuContainer>
              </NavItem>
            </NavItemContainer>
          )}
        </NavContainer>
        {isMobile && (
          <MobileLogoLink>
            <Menu.Item onClick={toggleBurger}>
              <Icon name="sidebar" size="big" />
            </Menu.Item>
          </MobileLogoLink>
        )}

        {!isMobile && (
          <AuthContainer>
            {location.pathname !== '/' && <SearchNavbar />}
            <Button primary>Sign in</Button>
          </AuthContainer>
        )}
      </HeaderContainer>
      {burgerVisible && isMobile && (
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setBurgerVisible(false)}
          vertical
          visible={burgerVisible}
          width="thin"
        >
          <Menu fixed="top" vertical inverted style={{ width: '100%' }}>
            <Menu.Menu style={{ marginLeft: '6em', marginTop: '1em' }}>
              <Menu.Item onClick={toggleBurger}>
                <Icon size="large" name="close" />
              </Menu.Item>
            </Menu.Menu>
            <Menu.Item>
              <NavLink to={route.HOME}>
                <Menu.Header>HOME</Menu.Header>
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>MOVIES</Menu.Header>
              <Menu.Menu>
                {moviesLinks.map(({ id, title, routeLink }) => (
                  <Menu.Item as={Container} key={id} onClick={toggleBurger}>
                    <ItemLink to={routeLink}>{title}</ItemLink>
                  </Menu.Item>
                ))}
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>TV SHOWS</Menu.Header>
              <Menu.Menu>
                {tvShowsLinks.map(({ id, title, routeLink }) => (
                  <Menu.Item as={Container} key={id} onClick={toggleBurger}>
                    <ItemLink to={routeLink}>{title}</ItemLink>
                  </Menu.Item>
                ))}
              </Menu.Menu>
            </Menu.Item>

          </Menu>
        </Sidebar>
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
