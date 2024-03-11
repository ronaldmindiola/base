import { Route, Routes } from "react-router-dom";

// Componentes
import HomePage from "../components/pages/HomePage";
import ServicesPage from "../components/pages/ServicesPage";
import BlogPage from "../components/pages/BlogPage";
import AboutPage from "../components/pages/AboutPage";
import ContactPage from "../components/pages/ContactPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
