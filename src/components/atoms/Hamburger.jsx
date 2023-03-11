//import React, { useState, useCallback } from "react";
//import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { MdMenu } from "react-icons/md";

// Settings
//import config from "../../config.json";

const Hamburger = () => {

  /* const { pages } = config;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []); */

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        //onClick={handleClick}
        sx={{ mr: 2, display: { sm: "flex", md: "none" } }}
      >
        <MdMenu />
      </IconButton>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {pages.map((page) => {
          <MenuItem
            key={page.label}
            onClick={handleClose} 
            component={Link} 
            to={page.path}
          >
            {page.label}
          </MenuItem>;
        })}

        <MenuItem onClick={handleClose} component={Link} to="/galeria">
          Galería de Fotos
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/servicios">
          Servicios
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/nosotros">
          Nosotros
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/Blog">
          Novedades!
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/contacto">
          Contacto
        </MenuItem>
      </Menu> */}
    </>
  );
};

export default Hamburger;