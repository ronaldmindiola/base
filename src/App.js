//import "./App.css";
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";

function App() {

  return (
    <>
        <Router>
          <RoutesApp />
        </Router>
    </>
  );
}

export default App;