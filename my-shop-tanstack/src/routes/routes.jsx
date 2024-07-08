import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import AddCustomer from "../components/AddCustomer.jsx";
import Hero from "../components/Hero.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "add-customer",
        element: <AddCustomer />,
      },
    ],
  },
]);
