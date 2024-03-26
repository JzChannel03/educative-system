import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./views/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
