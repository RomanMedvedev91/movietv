import { Button } from 'semantic-ui-react';
import Submenu from './Submenu';
import * as route from '../../constants/routes';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

// eslint-disable-next-line import/named
// eslint-disable-next-line object-curly-newline
import {
  NavContainer,
  AuthContainer,
  LogoLink,
  NavItem,
  NavLink,
  NavItemContainer
} from './Navbar.style';
// import { useState } from 'react';

function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <LogoLink to="/">
          <Logo />
          <h1>MovieTV</h1>
        </LogoLink>

        <NavItemContainer>
          <NavItem>
            <NavLink to={route.HOME}>Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to={route.HOME}>Movies</NavLink>
            <Submenu />
          </NavItem>

          <NavItem>
            <NavLink to={route.HOME}>Tv Shoes</NavLink>
          </NavItem>
        </NavItemContainer>
      </NavContainer>

      <AuthContainer>
        <Button primary>Sign in</Button>
      </AuthContainer>
    </>
  );
}

export default Navbar;
