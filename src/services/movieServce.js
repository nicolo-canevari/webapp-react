// GESTIONE DELLE CHIAMATE API
import axios from 'axios';

// Base URL della API del BE
const API_URL = 'http://localhost:3000/api/movies';

// Funzione per ottenere tutti i film (INDEX)
export const getAllMovies = async () => {

    try {

        // Chiamata per ottenere tutti i film
        const response = await axios.get(API_URL);
        // Restituisce i dati della risposta
        return response.data;

    } catch (error) {

        console.error('Errore nel recupero dei film:', error);
        // Lancia l'errore 
        throw error;

    }

};


// Funzione per ottenere un singolo film tramite ID (SHOW)
export const getMovieById = async (id) => {

    try {

        // Chiamata per ottenere il film con un id specifico
        const response = await axios.get(`${API_URL}/${id}`)
        // Restituisce i dati del film
        return response.data;

    } catch (error) {

        console.error('Errore nel recupero del film:', error);
        // Lancia l'errore 
        throw error;

    }

};