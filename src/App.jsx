import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/homepage/Homepage';
import Search from './routes/search/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search/*" element={<Search />} />
    </Routes>
  );
}

export default App;
