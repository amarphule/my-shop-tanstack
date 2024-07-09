import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import AddCustomer from "../components/AddCustomer.jsx";
import Hero from "../components/Hero.jsx";
import CustomerDetails from "../components/CustomerDetails.jsx";

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
      {
        path: "customers/edit/:id",
        element: <AddCustomer />,
      },
      {
        path: "customers/:id",
        element: <CustomerDetails />,
      },
    ],
  },
]);
