import React from "react";
import { Box, Typography } from "@mui/material";
import config from "../../config.json";

const Brand = () => {

  const label = config.brand.label;

  return (
    <Box
      component="div"
      style={{ display: "inline-flex", alignItems: "center" }}
    >

      <img
        src={config.brand.logo}
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