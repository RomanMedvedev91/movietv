import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage';
import Search from './routes/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
