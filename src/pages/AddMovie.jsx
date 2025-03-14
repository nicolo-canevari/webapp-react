// PAGINA FORM AGGIUNTA DI UN NUOVO FILM
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {

    // Definisco lo stato per ciascun campo del form
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [image, setImage] = useState('');
    const [abstract, setAbstract] = useState('');

    const navigate = useNavigate();

    // Funzione per gestire l'invio del form
    const handleSubmit = (e) => {

        e.preventDefault();

        // Creo un oggetto FormData per inviare dati form e file
        const formData = new FormData();
        formData.append('title', title);
        formData.append('director', director);
        formData.append('genre', genre);
        formData.append('release_year', releaseYear);
        formData.append('abstract', abstract);

        if (image) {

            // Aggiungi il file immagine
            formData.append('image', image);

        }
        // Faccio una richiesta POST al backend per salvare il nuovo film
        axios.post('http://localhost:3000/api/movies', formData, {

            // Header per inviare file
            headers: {

                'Content-Type': 'multipart/form-data',

            },

        })

            .then((response) => {

                // Dopo il salvataggio, reindirizza alla home
                navigate('/');

            })

            .catch((error) => {

                console.error('Errore durante l\'aggiunta del film:', error);

            });

    };

    return (

        <div>

            {/* Bottone per tornare alla Home */}
            <button onClick={() => navigate('/')}>Torna alla Home</button>

            <h2>Aggiungi un nuovo film</h2>

            {/* Il form per raccogliere i dati del film */}
            <form onSubmit={handleSubmit}>

                <div>

                    <label>Title:</label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                </div>

                {/* Campo per il regista del film */}
                <div>

                    <label>Director:</label>

                    <input
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        required
                    />

                </div>

                {/* Campo per il genere del film */}
                <div>

                    <label>Genre:</label>

                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />

                </div>

                {/* Campo per l'anno di uscita */}
                <div>

                    <label>Release Year:</label>
                    <input
                        type="number"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        required
                    />

                </div>

                {/* Campo per l'URL dell'immagine */}
                <div>

                    <label>Image URL:</label>

                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                </div>

                {/* Campo per il riassunto (abstract) */}
                <div>

                    <label>Abstract:</label>

                    <textarea
                        value={abstract}
                        onChange={(e) => setAbstract(e.target.value)}
                    />


                </div>

                {/* Bottone per inviare il form */}
                <button type="submit">Add Movie</button>

            </form>

        </div>

    );

};

export default AddMovie;