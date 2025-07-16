import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Loader from './Component/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GsapPointer from './Component/gsapanimation';
import TermAndCondi from './Component/Termcondi';
import PrivacyPolicy from './Component/PrivacyPolicy';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // only animate once on scroll
    });
  }, []);

  return (
    <>
    <GsapPointer/>
      <Routes><Route path="/" element={<Loader />} />
              <Route path="/home" element={<Home />} />
              <Route path="/terms" element={<TermAndCondi />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />


      </Routes>
    </>
  );
}

export default App;
