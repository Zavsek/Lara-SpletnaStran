
import './App.css'
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

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
const AboutPage = () => <div className="pt-20 p-4"><h2>O meni</h2></div>;
const ShowcasePage = () => <div className="pt-20 p-4"><h2>Showcase</h2></div>;
const OfferingPage = () => <div className="pt-20 p-4"><h2>Ponudba</h2></div>;
const ContactPage = () => <div className="pt-20 p-4"><h2>Kontakt</h2></div>;

export default App;