import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Servizio per recuperare i dati dal BE
import { getMovieById } from "../services/movieService";
// Importo il componente ReviewForm
import ReviewForm from '../components/ReviewForm';
// Importo le icone di stella
import { FaStar, FaRegStar } from "react-icons/fa";


const MovieDetail = () => {

    // Stato per memorizzare i dettagli del film
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Ottengo l'ID della rotta
    const { id } = useParams();
    // Hook per navigare
    const navigate = useNavigate();

    // Effettua la chiamata API per ottenere i dettagli del film
    useEffect(() => {

        const fetchMovie = async () => {

            try {

                // Usa il servizio per ottenere i dati del film
                const data = await getMovieById(id);
                console.log("Movie data:", data);

                // Se il film non esiste, fa il redirect alla pagina NotFound
                if (!data || data.length === 0) {

                    // Redirige alla pagina NotFound
                    navigate("/404", { replace: true });

                }

                // Risultato della query (un singolo film)
                setMovie(data);

                // Imposto le recensioni dal film (se esistono)
                setReviews(data.reviews || []);

                // Una volta che i dati sono stati recuperati, segnalo che il caricamento è finito
                setLoading(false);

            } catch (err) {

                setError("Failed to fetch movie details.");
                setLoading(false);

                // Nel caso di errore, redirigi alla pagina di errore 404
                navigate("/404", { replace: true });

            }

        };

        fetchMovie();

    }, [id, navigate]);

    // Funzione per aggiungere una recensione dinamicamente
    const addReview = (newReview) => {

        console.log("New review added:", newReview);

        // Aggiorno lo stato delle recensioni
        setReviews((prevReviews) => {

            const updatedReviews = [...prevReviews, newReview];
            console.log("Updated reviews:", updatedReviews);

            return updatedReviews;

        });

    };

    // Se necessario mostro un messaggio di caricamento o errore
    if (loading) {

        return <div>Loading...</div>;

    }

    if (error) {

        return <div>Sorry, we couldn't load the movie details. Please try again later.</div>;

    }

    // Se il film non è trovato
    if (!movie) {

        return <div>Movie not found</div>;

    }

    // Funzione per tornare alla home
    const handleBackToHome = () => {

        // Naviga alla home
        navigate('/');

    };

    return (

        <div className="movie-detail">

            {/* Bottone per tornare alla Home */}
            <button onClick={handleBackToHome}>Back to Home</button>

            <div className="card-movie-detail">

                {/* Container img e titolo */}
                <div className="movie-image-container">

                    <h1>{movie.title}</h1>
                    <img src={movie.image} alt={movie.title} className="movie-image" />
                    <h3>Reviews:</h3>

                </div>

                {/* Container descrizione del film */}
                <div className="movie-info">

                    <p><strong>Director:</strong> {movie.director}</p>

                    <p><strong>Genre:</strong> {movie.genre}</p>

                    <p><strong>Release Year:</strong> {movie.release_year}</p>

                    <p><strong>Abstract:</strong> {movie.abstract}</p>

                </div>

            </div>

            {/* Se ci sono recensioni, visualizzale */}
            {reviews.length > 0 ? (

                <div className="reviews">

                    <ul>

                        {/* Per ogni recensione creo un elemento nella lista */}
                        {reviews.map((review, index) => (

                            <li key={review.id || index}>

                                {/* Visualizzazione delle stelle (da 1 a 5) a fianco al nome dell'utente */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>

                                    <p><strong>{review.name}</strong></p>


                                    <div className="review-rating">

                                        {Array.from({ length: 5 }, (v, i) => (

                                            i < review.vote ? (

                                                <FaStar key={i} className="filled-star" />

                                            ) : (

                                                <FaRegStar key={i} className="empty-star" />

                                            )

                                        ))}

                                    </div>

                                </div>

                                {/* Aggiungi il testo della recensione */}
                                <p>{review.text}</p>

                            </li>

                        ))}

                    </ul>

                </div>

            ) : (

                // Nel caso in cui non ci fossero delle recensioni
                <p>No reviews available for this movie.</p>

            )}

            {/* Aggiungo il componente ReviewForm passando l'ID del film */}
            <ReviewForm movieId={id} addReview={addReview} />

        </div>

    );

}

export default MovieDetail;