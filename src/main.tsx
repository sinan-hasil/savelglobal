import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/mainpage/App.tsx";
import Products from "./pages/products/Products.js";
import ProductDetail from "./pages/detail/ProductDetail.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Main from "./pages/main/Main.tsx";
import Hakkimizda from "./pages/hakkimizda/Hakkimizda.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products/:productName",
        element: <ProductDetail />,
      },
      {
        path: "/hakkimizda",
        element: <Hakkimizda />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
