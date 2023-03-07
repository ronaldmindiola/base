import React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes
import Index from "../components/pages/Index";
import Products from "../components/pages/Products";
// import Services from "../components/pages/Services";
// import Gallery from "../components/pages/Gallery";
// import Blog from "../components/pages/Blog";
import AboutUs from "../components/pages/AboutUs";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound.jsx";
// import Dashboard from "../components/pages/Dashboard";
// import DashboardProducts from "../components/pages/DashboardProducts";
// import ListProducts from "../components/molecules/ListProducts";
// import Prueba from "../components/pages/Prueba";


const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/productos" element={<Products section="Catálogo de Productos" />} />
        <Route path="/nosotros" element={<AboutUs section="Quienes Somos?"/>} />
        <Route path="/contacto" element={<Contact section="Contáctanos"/>} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesApp;