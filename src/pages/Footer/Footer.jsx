import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import * as route from '../../constants/routes';

// import footerBackground from '../../assets/footer3.jpg';
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
  return (
    <FooterContainer>
      <FooterGradient />
      <BackgroundImg>
        <img src={footerBackground} alt="footerImg" />
      </BackgroundImg>

      <LinksContainer>
        <Link to="/">
          <Logo />
        </Link>
        <NavigationContainer>
          <NavItemContainer>
            <NavItem>
              <Link to={route.MOVIES}>Movies</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Popular</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Upcomming</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Top rated</Link>
            </NavItem>
          </NavItemContainer>

          <NavItemContainer>
            <NavItem>
              <Link to={route.MOVIES}>Movies</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Popular</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Upcomming</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Top rated</Link>
            </NavItem>
          </NavItemContainer>

          <NavItemContainer>
            <NavItem>
              <Link to={route.MOVIES}>Movies</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Popular</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Upcomming</Link>
            </NavItem>
            <NavItem>
              <Link to={route.MOVIES}>Top rated</Link>
            </NavItem>
          </NavItemContainer>
        </NavigationContainer>
      </LinksContainer>

      <FooterDownContainer>
        <div>
          <p>© 2022 MovieTV, Canada, Toronto, 185 Roehampton Ave </p>
        </div>
        <SocialsContainer>
          <p>Social media</p>
          <div>
            <Link className="github" to="/">
              <Icon size="big" name="github" />
            </Link>
            <Link className="facebook" to="/">
              <Icon size="big" name="facebook f" />
            </Link>
            <Link className="instagram" to="/">
              <Icon size="big" name="instagram" />
            </Link>
            <Link className="twitter" to="/">
              <Icon size="big" name="twitter" />
            </Link>
            <Link className="youtube" to="/">
              <Icon size="big" name="youtube" />
            </Link>
          </div>
        </SocialsContainer>
      </FooterDownContainer>
    </FooterContainer>
  );
}

export default Footer;
