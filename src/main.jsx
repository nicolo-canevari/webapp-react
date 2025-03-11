// Importo i moduli principali di React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importo il componente principale App
import App from './App';

// Renderizzo l'app all'interno dell'elemento con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

);
