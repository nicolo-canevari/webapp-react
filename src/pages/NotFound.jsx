import { Link } from "react-router-dom";

// Componente per la pagina 404 - Not Found
const NotFound = () => {

    return (

        <div className="not-found">

            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist or has been moved.</p>

            <Link to="/">
                <button>Back to Home</button>
            </Link>

        </div>

    );

};

export default NotFound;