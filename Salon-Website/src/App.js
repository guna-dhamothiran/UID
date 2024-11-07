// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Service';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import AdminPanel from './pages/admin/adminPanel';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="admin/" element={<AdminPanel />} /> 
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
