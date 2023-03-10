//import "./App.css";
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import RoutesApp from "./routes/RoutesApp";
import theme from "./theme";
import ThemeContext from "./contexts/ThemeContext";
import NavBar from './components/organisms/NavBar';

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(theme);
  const contextValue = React.useMemo(() => ({ theme: currentTheme, setTheme: setCurrentTheme }), [currentTheme]);
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <NavBar />
        <Router>
          <RoutesApp />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;