/* eslint-disable react/jsx-closing-bracket-location */
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import * as route from '../../constants/routes';

import { useMediaQuery } from '../../hooks/useMediaQuery.tsx';
import footerBackground from '../../assets/footerBackground.jpg';

// eslint-disable-next-line object-curly-newline
import {
  FooterContainer,
  BackgroundImg,
  NavItemContainer,
  NavItem,
  LinksContainer,
  SocialsContainer,
  FooterDownContainer,
  FooterGradient,
  NavigationContainer
} from './Footer.style';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

function Footer() {
  const { isMobile } = useMediaQuery();

  return (
    <FooterContainer isMobile={isMobile}>
      <FooterGradient />
      <BackgroundImg>
        <img src={footerBackground} alt="footerImg" />
      </BackgroundImg>

      <LinksContainer isMobile={isMobile}>
        <Link to="/">
          <Logo />
        </Link>
        <NavigationContainer>
          <NavItemContainer>
            <NavItem>
              <Link to={route.VIEW_MOVIES}>Movies</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_MOVIES_NOW_PLAYING}>Playing Now</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_MOVIES_UPCOMING}>Upcomming</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_MOVIES}>Popular</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_MOVIES_TOP_RATED}>Top rated</Link>
            </NavItem>
          </NavItemContainer>

          <NavItemContainer>
            <NavItem>
              <Link to={route.VIEW_TVSHOWS}>TV Shows</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_TVSHOWS_AIRING_TODAY}>Airing Today</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_TVSHOWS_ON_TV}>On TV</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_TVSHOWS}>Popular</Link>
            </NavItem>
            <NavItem>
              <Link to={route.VIEW_TVSHOWS_TOP_RATED}>Top rated</Link>
            </NavItem>
          </NavItemContainer>
        </NavigationContainer>
      </LinksContainer>

      <FooterDownContainer isMobile={isMobile}>
        <div>
          <p>© 2023 MovieTV, Canada, Toronto</p>
        </div>
        <SocialsContainer isMobile={isMobile}>
          <p>Social media</p>
          <div style={{ justifyContent: isMobile ? 'center' : undefined }}>
            <a
              className="github"
              href="https://github.com/RomanMedvedev91/movietv"
              target="_blank"
              rel="noreferrer">
              <Icon size="big" name="github" />
            </a>
            <a
              className="facebook"
              href="https://www.facebook.com/themoviedb"
              target="_blank"
              rel="noreferrer">
              <Icon size="big" name="facebook f" />
            </a>
            <a className="instagram" to="/">
              <Icon size="big" name="instagram" />
            </a>
            <a
              className="twitter"
              href="https://twitter.com/themoviedb"
              target="_blank"
              rel="noreferrer">
              <Icon size="big" name="twitter" />
            </a>
            <a className="youtube" to="/">
              <Icon size="big" name="youtube" />
            </a>
          </div>
        </SocialsContainer>
      </FooterDownContainer>
    </FooterContainer>
  );
}

export default Footer;
