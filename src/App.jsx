// Importo i componenti e le librerie
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importo le pagine
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
// Importo il Layout principale
import MainLayout from './layout/MainLayout';

// Componente principale dell'app
function App() {

  return (

    // Router per gestire le rotte dell'app
    <Router>

      {/* Il layout di base per tutte le pagine */}
      <MainLayout>

        {/* Definisce le rotte principali */}
        <Routes>

          {/* Rotta per la home page */}
          <Route path="/" element={<Home />} />

          {/* Rotta per la pagina del dettaglio del film */}
          <Route path="/movies/:id" element={<MovieDetail />} />

        </Routes>

      </MainLayout>

    </Router>

  );

}

export default App;
