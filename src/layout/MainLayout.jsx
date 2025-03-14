// LAYOUT DI BASE DELLA PAGINA
import React from 'react';
// Permette di accedere alla location dell'URL
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = ({ children }) => {

    const location = useLocation();

    // Verifica se la rotta è una pagina MovieDetail (con ID dinamico) o la pagina NotFound 404
    const hideHeader = location.pathname.startsWith('/movies/') || location.pathname === '/404' || location.pathname === '/add-movie';



    return (

        <div>

            {/* Condizione per visualizzare l'header */}
            {!hideHeader && <Header />}

            {/* Il contenuto principale cambia a seconda della rotta */}
            <main>{children}</main>

        </div>

    );

}

export default MainLayout;