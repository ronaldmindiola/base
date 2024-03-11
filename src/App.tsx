import { Link } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        {" | "}
        <Link to="/servicios">Servicios</Link>
        {" | "}
        <Link to="/blog">Blog</Link>
        {" | "}
        <Link to="/nosotros">Nosotros</Link>
        {" | "}
        <Link to="/contacto">Contacto</Link>
      </nav>
      <RoutesApp />
    </>
  );
}

export default App;
