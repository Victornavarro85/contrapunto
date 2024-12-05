import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { DebatePage } from './pages/DebatePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/debates/:id" element={<DebatePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;