import React from "react";
import { AppBar, Toolbar } from "@mui/material";

// Components
import Hamburger from "../atoms/Hamburger";
import Brand from "../atoms/Brand";
import NavList from "../atoms/NavList";
import Mode from "../atoms/Mode";

const NavBar = () => {
  return (
    <>
      <AppBar
        position="fixed" /* color='primary' */ /* sx={{ backgroundColor: '#ffffff' }} */
      >
        <Toolbar>
          <Hamburger />
          <Brand label="Titulo de la Pagina" />
          <NavList />
          <Mode />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
