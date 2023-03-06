import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/global.css';

import { Home } from './pages/Home'
import { Vagas } from './pages/Vagas'
import { Nvmes } from './pages/Nvmes'
import { Nvdia } from './pages/Nvdia';
import { Noticias } from './pages/Noticias';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nivermes' element={<Nvmes />} />
          <Route path='niverdia' element={<Nvdia />} />
          <Route path='vagas' element={<Vagas />} />
          <Route path='noticias' element={<Noticias />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
