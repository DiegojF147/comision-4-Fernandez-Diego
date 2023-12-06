import React from "react";
import { RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import { rutas } from "./router";

const App = () => {
  return (
    <Dashboard>
      <RouterProvider router={rutas} />
    </Dashboard>
  );
};

export default App;
