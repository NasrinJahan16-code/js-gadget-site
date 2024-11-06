import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Dashboard from './Components/Details/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>Page not found</div>,
    children: [
      {
        index: true,
       element: <Home></Home>

      },
      {
        path:"dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: '/details/:id',
      element : <Details></Details>,
      loader: async ()=>{
        console.log("loader running");
          const response = await fetch("gadgets.json");
          console.log("done");
          if (!response.ok) {
            console.log("running");
            throw new Error("Failed to fetch gadgets data");
          }
          return response.json();
      }
      },
    ],
    
      
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
