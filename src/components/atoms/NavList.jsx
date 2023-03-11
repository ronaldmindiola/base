import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import config from "../../config.json";


const NavList = () => {
  const { pages } = config;
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "flex" }, spacing:2 }}>
        {pages.map((page) => (
          <Box
            underline="hover"
            key={page.label}
            to={page.path}
            sx={{
              color: "gainsboro",
              mx: 1,
              display: "block",
              textTransform: "capitalize",
              fontSize: 16,
              '&:hover': {
                backgroundColor: '#000000'
              }
            }}
          >
            {page.label}
          </Box>
        ))}
      </Box>
      
    </>
  );
};

export default NavList;
