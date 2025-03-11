// PAGINA PRINCIPALE DELL'APP
// Importo gli hook necessari da React
import { useState, useEffect } from 'react';
// Importo la funzione per chiamare l'API
import { getAllMovies } from '../services/movieServce';

// Funzione Home che rappresenta la pagina principale
const Home = () => {

    // Stato per memorizzare la lista dei film
    const [movies, setMovies] = useState([]);

    // useEffect si esegue quando il componente viene montato, per fare la chiamata API
    useEffect(() => {

        const fetchMovies = async () => {

            // Chiamo la funzione getAllMovies per recuperare i dati dal backend
            const movieData = await getAllMovies();

            // Mostro i dati ricevuti per il debug
            console.log('Movies ricevuti:', movieData);

            // Salvo i film nello stato
            setMovies(movieData);

        };

        // Funzione per caricare i film
        fetchMovies();

        // L'array vuoto fa sì che questa chiamata venga eseguita una sola volta al montaggio
    }, []);


    return (

        <div>

            <h1>Lista Film</h1>

            <div>

                {movies.map(movie => (

                    <div key={movie.id}>

                        {/* Mostro il titolo del film */}
                        <h2>{movie.title}</h2>

                        {/* Mostro l'immagine del film */}
                        <img src={movie.image} alt={movie.title} />

                        {/* Mostro la trama del film */}
                        <p>{movie.abstract}</p>

                    </div>

                ))}

            </div>

        </div>

    );

};


export default Home;