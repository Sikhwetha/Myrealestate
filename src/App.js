import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Properties from './pages/Properties/Properties';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import { Footer } from "./Components/Footer/Footer";
import { Ourservices } from './pages/Ourservices/Ourservices';

const App = () => {
  useEffect(() => {
    // Create the script element for Google Ads
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3229999237020171";
    script.async = true;
    script.crossOrigin = "anonymous";

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourservices" element={<Ourservices />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;

