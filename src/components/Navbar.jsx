import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    // Ottengo la funzione di navigazione
    const navigate = useNavigate();

    // Funzione per navigare alla pagina Add Movie
    const handleNavigateToAddMovie = () => {

        navigate('/add-movie');

    };

    return (

        <nav>

            <ul>

                {/* Bottone che naviga alla pagina Add Movie */}
                <li>

                    <button onClick={handleNavigateToAddMovie}>Add Movie</button>

                </li>

            </ul>

        </nav>

    );

};

export default Navbar;