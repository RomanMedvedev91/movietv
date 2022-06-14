import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './routes/header/Header';
import Homepage from './routes/homepage/Homepage';
import Search from './routes/search/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="/search/*" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
