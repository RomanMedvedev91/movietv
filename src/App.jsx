import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as route from './constants/routes';

import NavBar from './components/Navbar/Navbar';
import Homepage from './pages/home/Home';
import Search from './pages/search/Search';
import Movies from './pages/Movies/Movies';
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
          <Route path={route.PERSON} element={<Person />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
