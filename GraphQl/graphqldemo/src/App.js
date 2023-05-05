import React from "react";
import { useRoutes } from "react-router";
import NavBar from "./components/NavBar";
import { Router } from "./router";

function App() {
  const element = useRoutes(Router);

  return (
    <div>
      <NavBar />
      {element}
    </div>
  );
}

export default App;
