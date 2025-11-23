// src/routes.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import Home from './pages/Home';
import Watch from './pages/Watch';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* /watch SEM id */}
        <Route path="/watch" element={<Watch />} />
        {/* /watch COM id */}
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
