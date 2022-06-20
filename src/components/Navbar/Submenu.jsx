// import { Link } from 'react-router-dom';
import { NavSubMenuContainer, ItemLink, SubMenuItem } from './Submenu.style';
import * as route from '../../constants/routes';

function Submenu() {
  return (
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
  );
}

export default Submenu;
