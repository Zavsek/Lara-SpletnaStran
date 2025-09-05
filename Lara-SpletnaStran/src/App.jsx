
import './App.css'
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { ShowcasePage } from './pages/ShowcasePage';

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

const OfferingPage = () => <div className="pt-20 p-4"><h2>Ponudba</h2></div>;
const ContactPage = () => <div className="pt-20 p-4"><h2>Kontakt</h2></div>;

export default App;