import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movieService";


const MovieDetail = () => {

    // Stato per memorizzare i dettagli del film
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Ottengo l'ID della rotta
    const { id } = useParams();


    // Effettua la chiamata API per ottenere i dettagli del film
    useEffect(() => {

        const fetchMovie = async () => {

            try {

                // Usa il servizio per ottenere i dati del film
                const data = await getMovieById(id);

                // Risultato della query (un singolo film)
                setMovie(data[0]);

                // Una volta che i dati sono stati recuperati, segnalo che il caricamento è finito
                setLoading(false);

            } catch (err) {

                setError("Failed to fetch movie details.");
                setLoading(false);

            }

        };

        fetchMovie();

    }, [id]);

    // Se necessario mostro un messaggio di caricamento o errore
    if (loading) {

        return <div>Loading...</div>;

    }

    if (error) {

        return <div>{error}</div>;

    }

    // Se il film non è trovato
    if (!movie) {

        return <div>Movie not found</div>;

    }

    return (

        <div className="movie-detail">

            <h1>{movie.title}</h1>

            <img src={movie.image} alt={movie.title} className="movie-image" />

            <p><strong>Director:</strong> {movie.director}</p>

            <p><strong>Genre:</strong> {movie.genre}</p>

            <p><strong>Release Year:</strong> {movie.release_year}</p>

            <p><strong>Abstract:</strong> {movie.abstract}</p>

        </div>

    );

}

export default MovieDetail;