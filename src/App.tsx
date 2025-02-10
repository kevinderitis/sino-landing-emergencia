import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import AdminPage from './AdminPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;