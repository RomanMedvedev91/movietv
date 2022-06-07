import { Outlet } from 'react-router-dom';
import Main from '../../components/Main/Main';

import { HomepageContainer } from './Homepage.style';

function Homepage() {
  return (
    <HomepageContainer>
      <Main />
      <Outlet />
    </HomepageContainer>
  );
}

export default Homepage;
