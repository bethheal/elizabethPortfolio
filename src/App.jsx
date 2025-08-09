import React from "react";
import RootLayout from "./components/RootLayout";
import { BrowserRouter as Router } from "react-router-dom";
// import RootLayout from "./components/RootLayout";

function App() {
  return (
    <Router>
      <RootLayout/>
    </Router>
  );
}

export default App;
