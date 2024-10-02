import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Root from './pages/root/Root.tsx';
import App from './pages/mainpage/App.tsx';
import Products from './pages/products/Products.js';
import ProductDetail from './pages/detail/ProductDetail.tsx';
import Contact from './pages/contact/Contact.tsx';
import Main from './pages/main/Main.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/test",
        element: <App />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
  {
    path: "/",
    element: <Root />,    
  },
  
  
  
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
