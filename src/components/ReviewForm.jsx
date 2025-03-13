// GESTIONE DEL FORM PER LE RECENSIONI
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId }) => {
    // Stato per gestire i valori del form
    const [name, setName] = useState('');
    const [vote, setVote] = useState(5);
    const [text, setText] = useState('');
    // Stato per il messaggio di errore
    const [error, setError] = useState('');
    // Stato per il messaggio di successo
    const [success, setSuccess] = useState('');

    // Funzione per gestire l'invio del form
    const handleSubmit = async (e) => {

        // Previene il comportamento di default del form
        e.preventDefault();

        // Controlla se tutti i campi obbligatori sono stati riempiti
        if (!name || !vote || !text) {

            // Imposto il messaggio di errore
            setError('Tutti i campi sono obbligatori!');
            return;

        }

        try {

            // Effettuo la richiesta per inviare la recensione
            const response = await axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, {

                movie_id: movieId,
                name: name,
                vote: vote,
                text: text,

            });

            // Se la risposta è positiva, mostra il messaggio di successo
            if (response.status === 201) {

                setSuccess('Recensione inviata con successo!');
                setName('');
                setVote(5);
                setText('');
                setError('');

            }

        } catch (err) {

            // Gestisce gli errori
            setError('Errore durante l\'invio della recensione');
            console.error(err);

        }

    };

    return (

        <div className="review-form">

            <h3>Lascia una recensione</h3>

            {/* Se c'è un errore, viene mostrato il messaggio in rosso */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Se la recensione è stata inviata con successo, mostra il messaggio */}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            {/* Form per inserire la recensione */}
            <form onSubmit={handleSubmit}>

                <div>

                    <label htmlFor="name">Nome:</label>

                    {/* Campo per inserire il nome dell'utente */}
                    <input
                        type="text"
                        id="name"
                        value={name}

                        // Aggiorno lo stato con il valore inserito
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div>

                    <label htmlFor="vote">Voto:</label>

                    {/* Campo per inserire il voto (1-5) */}
                    <input
                        type="number"
                        id="vote"
                        value={vote}
                        min="1"
                        max="5"

                        // Aggiorno il voto
                        onChange={(e) => setVote(Number(e.target.value))}
                    />
                </div>

                <div>

                    <label htmlFor="text">Recensione:</label>

                    {/* Campo per inserire il testo della recensione */}
                    <textarea
                        id="text"
                        value={text}

                        // Aggiorno il testo
                        onChange={(e) => setText(e.target.value)}
                    />

                </div>

                {/* Bottone per inviare la recensione */}
                <button type="submit">Invia recensione</button>

            </form>

        </div>

    );

};

export default ReviewForm;

