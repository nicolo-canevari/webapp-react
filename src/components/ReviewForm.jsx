// GESTIONE DEL FORM PER LE RECENSIONI
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId, addReview }) => {
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

        // Resetto i messaggi prima di inviare una nuova recensione
        setError('');
        setSuccess('');

        // Controlla se tutti i campi obbligatori sono stati riempiti
        if (!name || !vote || !text) {

            // Imposto il messaggio di errore
            setError('Tutti i campi sono obbligatori!');
            return;

        }

        // Assicuriamoci che il voto sia un numero valido tra 1 e 5
        if (vote < 1 || vote > 5) {

            setError('Il voto deve essere un numero tra 1 e 5!');
            return;

        }

        try {

            // Effettuo la richiesta per inviare la recensione
            const response = await axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, {

                name: name,
                vote: vote,
                text: text

            });

            console.log("Response from API:", response);

            // Se la risposta è positiva, mostra il messaggio di successo
            if (response.status === 201) {

                setSuccess('Recensione inviata con successo!');
                setName('');
                setVote(5);
                setText('');

                // Aggiungi la recensione appena inviata allo stato del componente padre
                addReview({

                    id: response.data.id,
                    name: response.data.name,
                    vote: response.data.vote,
                    text: response.data.text

                });

            }

        } catch (err) {

            // Gestisce gli errori
            setError('Errore durante l\'invio della recensione');
            console.error("Errore API:", err);

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
                        value={vote || ''}
                        min="1"
                        max="5"

                        // Aggiorno il voto
                        onChange={(e) => {

                            const newVote = e.target.value;

                            // Se è vuoto, lo mantengo vuoto, altrimenti lo convertiamo in un numero
                            setVote(newVote === '' ? '' : Number(newVote));

                        }}
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
                <button type="submit">Submit</button>

            </form>

        </div>

    );

};

export default ReviewForm;

