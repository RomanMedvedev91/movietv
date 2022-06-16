import { Outlet } from 'react-router-dom';
import { HeaderContainer } from './Header.style';

import Navbar from '../../components/Navbar/Navbar';

function Header() {
  return (
    <>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default Header;
