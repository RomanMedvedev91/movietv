import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as route from './constants/routes';

import Header from './routes/header/Header';
import Homepage from './routes/homepage/Homepage';
import Search from './routes/search/Search';

function App() {
  return (
    <Routes>
      <Route path={route.HOME} element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path={route.SEARCH} element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
