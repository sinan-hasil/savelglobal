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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,    
  },
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
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
