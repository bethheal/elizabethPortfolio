import React from "react";
import RootLayout from "./components/RootLayout";
import { Router } from "react-router";
// import RootLayout from "./components/RootLayout";

function App() {
  return (
    <Router>
      <RootLayout/>
    </Router>
  );
}

export default App;
