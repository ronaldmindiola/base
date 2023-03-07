import React from "react";
import { Box, Typography } from "@mui/material";

// Use
// <Brand label="Titulo de la Pagina" size="small" />

const Brand = ({ label }) => {
  return (
    <Box
      component="div"
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      <img
        src="/images/logo.png"
        height={32}
        width={32}
        alt="logo"
        style={{ verticalAlign: "middle", marginRight: "16px" }}
      />
      <Typography variant="h6" display="inline">
        {label}
      </Typography>
    </Box>
  );
};

export default Brand;