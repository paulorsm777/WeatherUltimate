import { useState } from 'react'
import SearchPage from './pages/Search.tsx';
import Weather from './pages/Weather.tsx';
import Navbar from './components/Navbar.tsx';
import { Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;
