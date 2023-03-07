import { useContext, useState } from "react";import { Box, createTheme } from "@mui/material";
import { MdNightlight, MdLightMode } from "react-icons/md";
import ThemeContext from "../../contexts/ThemeContext";

const Mode = () => {
  const { theme, setTheme } = useContext(ThemeContext); // obtener el tema y la función de actualización del contexto
  const [isHovered, setIsHovered] = useState(false); // agregar estado para controlar el hover

  const toggleMode = () => {
    const newMode = theme.palette.mode === "light" ? "dark" : "light";
    const newTheme = createTheme({
      palette: {
        mode: newMode,
      },
    });
    setTheme(newTheme); // actualizar el tema usando la función setTheme del contexto
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      color="inherit"
      onClick={toggleMode}
      variant={isHovered ? "text" : "text"} // cambiar el estilo del botón en función del hover
      onMouseEnter={handleMouseEnter} // manejar el hover
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      {theme.palette.mode === "light" ? <MdLightMode /> : <MdNightlight />}
    </Box>
  );
};

export default Mode;