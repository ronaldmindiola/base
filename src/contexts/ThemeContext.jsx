import React from "react";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const ThemeContext = React.createContext({
  theme: defaultTheme,
  setTheme: () => {},
});

export default ThemeContext;