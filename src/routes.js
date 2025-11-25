import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header, Footer } from './components';
import Home from './pages/Home';
import Watch from './pages/Watch';

function AppRoutes() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Header onSearch={setSearchTerm} />

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
