// LAYOUT DI BASE DELLA PAGINA
import Header from '../components/Header';

const MainLayout = ({ children }) => {

    return (

        <div>

            {/* Aggiunge l'Header con il Navbar */}
            <Header />

            {/* Il contenuto principale cambia a seconda della rotta */}
            <main>{children}</main>

        </div>

    );

}

export default MainLayout;