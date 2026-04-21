import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatWidget } from './components/ChatWidget';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  );
};

export default App;
