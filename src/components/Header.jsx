import React from 'react';
// Permette di accedere alla location dell'URL
import { useLocation } from 'react-router-dom';
// Importo il Navbar
import Navbar from './Navbar';

const Header = () => {

    const location = useLocation();

    // Nasconde l'header sulla pagina MovieDetail
    if (location.pathname === '/movies/') {

        // Non visualizzare l'header su MovieDetail
        return null;
    }

    return (

        <header>

            {/* Aggiungo la Navbar nel componente Header */}
            <Navbar />

        </header>

    );

};

export default Header;