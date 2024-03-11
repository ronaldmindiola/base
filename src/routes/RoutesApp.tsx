import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/ContactPage";
import AboutPage from "../components/pages/AboutPage";
import BlogPage from "../components/pages/BlogPage";
import ServicesPage from "../components/pages/ServicesPage";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default RoutesApp;