// PAGINA PRINCIPALE DELL'APP
// Importo gli hook necessari da React
import { useState, useEffect } from 'react';
// Importo la funzione per chiamare l'API
import { getAllMovies } from '../services/movieService';
// Importo MovieList
import MovieList from '../components/MovieList';

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

            <h1>Movie List</h1>

            {/* Usa MovieList per visualizzare la lista dei film */}
            <MovieList movies={movies} />

        </div>

    );

};


export default Home;