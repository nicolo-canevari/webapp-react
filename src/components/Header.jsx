import React from 'react';
// Permette di accedere alla location dell'URL
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    // Nasconde l'header sulla pagina MovieDetail
    if (location.pathname === '/movie-detail') {

        // Non visualizzare l'header su MovieDetail
        return null;
    }

    return (

        <header>

            <h1>Libreria dei miei Film</h1>

        </header>

    );

};

export default Header;