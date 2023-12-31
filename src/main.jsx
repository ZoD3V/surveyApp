import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import EndPage from './pages/FinishPage/EndPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/finish",
    element: <EndPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
