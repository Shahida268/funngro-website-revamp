import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Teen from '@/pages/Teen';
import Company from '@/pages/Company';
import Login from '@/pages/Login';
import Signup from '@/pages/signup';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Teen />} />
            <Route path="/company" element={<Company />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Teen />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}