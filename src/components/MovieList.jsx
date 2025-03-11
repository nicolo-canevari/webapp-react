// COMPONENTE CHE GESTISCE LA LISTA DEI FILM E LI VISUALIZZA (TRAMITE MovieCard)
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {

    return (

        <div className="movie-list">

            {/* Mappa i film e crea una MovieCard per ciascuno */}
            {movies.map(movie => (

                <MovieCard key={movie.id} movie={movie} />

            ))}

        </div>

    );

};

export default MovieList;