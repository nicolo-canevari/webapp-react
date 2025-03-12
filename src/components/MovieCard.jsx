// COMPONENTE PER VISUALIZZARE IL SINGOLO FILM
import React from 'react';
import { Link } from 'react-router-dom';

// Componente MovieCard che rappresenta una singola card di film
const MovieCard = ({ movie }) => {

    return (

        <div className="movie-card">

            {/* Immagine della locandina del film */}
            <img src={movie.image} alt={movie.title} />

            {/* Testo della Card del film */}
            <div className="details">

                <h2>{movie.title}</h2>
                <p><strong>Regista:</strong> {movie.director}</p>
                <p><strong>Trama:</strong> {movie.abstract}</p>

                {/* Bottone per la navigazione alla pagina MovieDetail */}
                <Link to={`/movies/${movie.id}`}>

                    <button>View Details</button>

                </Link>

            </div>

        </div>

    );

};

export default MovieCard;