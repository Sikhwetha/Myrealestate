// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Properties from './pages/Properties/Properties';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import {Footer} from "./Components/Footer/Footer"
import { Ourservices } from './pages/Ourservices/Ourservices';

const App = () => {
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
        <Footer/>
        </>
    );
};

export default App;

