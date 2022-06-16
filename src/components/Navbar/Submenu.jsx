// import { Link } from 'react-router-dom';
import { NavSubMenuContainer, ItemLink, SubMenuItem } from './Submenu.style';

function Submenu() {
  return (
    <NavSubMenuContainer>
      <SubMenuItem>
        <ItemLink to="/movies/top-movies">Top Movies</ItemLink>
      </SubMenuItem>
      <SubMenuItem>
        <ItemLink to="/movies/popular">Popular</ItemLink>
      </SubMenuItem>
      <SubMenuItem>
        <ItemLink to="/movie/upcomming">Upcomming</ItemLink>
      </SubMenuItem>
    </NavSubMenuContainer>
  );
}

export default Submenu;
