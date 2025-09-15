
import './App.css'
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

import { ShowcasePage } from './pages/ShowcasePage';
import { ContactPage } from './pages/ContactPage';
import OfferingPage from './pages/OfferingPAge';



const App = () => {
  return (

    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/offering" element={<OfferingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App;