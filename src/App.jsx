import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
