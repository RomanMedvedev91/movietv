import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as route from './constants/routes';

import NavBar from './components/Navbar/Navbar';
import Homepage from './pages/home/Home';
import Search from './pages/search/Search';
import Movies from './pages/Movies/Movies';
import TvShows from './pages/TvShows/TvShows';
import TvShow from './pages/TvShow/TvShow';
import Footer from './pages/Footer/Footer';
import Person from './pages/person/Person';

function App() {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<NavBar />}>
          <Route index element={<Homepage />} />
          <Route path={route.SEARCH} element={<Search />} />
          <Route path={route.MOVIES} element={<Movies />} />
          {/* <Route path={route.TVSHOES} element={<TVShoes />}> */}
          <Route path={route.TVSHOWS}>
            <Route index element={<TvShows />} />
            <Route path=":tvShowId" element={<TvShow />} />
          </Route>

          <Route path={route.PERSON} element={<Person />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
