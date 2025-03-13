// GESTIONE DEL FORM PER LE RECENSIONI
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId }) => {
    // Stato per gestire i valori del form
    const [name, setName] = useState('');
    const [vote, setVote] = useState(5); // valore di voto iniziale impostato su 5
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    // Funzione per gestire l'invio del form
    const handleSubmit = async (e) => {

        // Previene il comportamento di default del form
        e.preventDefault();

        // Controlla se tutti i campi obbligatori sono stati riempiti
        if (!name || !text) {

            // Imposto il messaggio di errore
            setError('Tutti i campi sono obbligatori!');
            return;

        }

        // Tentativo di inviare la recensione al server
        try {

            const response = await axios.post('http://localhost:3000/api/reviews', {

                movie_id: movieId,
                name,
                vote,
                text

            });

            // Se la recensione è stata inviata correttamente
            alert('Recensione inviata con successo!');

            // Resetto i campi del form dopo l'invio
            setName('');
            setVote(5);
            setText('');

        } catch (err) {

            console.error(err);

            // Mostra un errore se c'è stato un problema
            setError('Si è verificato un errore, riprova più tardi.');

        }

    }

}