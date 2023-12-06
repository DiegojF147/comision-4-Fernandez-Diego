import { createBrowserRouter } from "react-router-dom";

//Vistas
import Home from "./pages/Home";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ingresar",
    element: <div>Ingresar</div>,
  },
]);

export { rutas };
