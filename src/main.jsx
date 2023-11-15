import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './sections/Home/Home.jsx'
import Portada from './Sections/Portada/Portada.jsx';
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import ListaPeliculas from './Sections/moviesList/moviesList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2 className='text-custom'>Sorry 400, no encontre la pagina</h2>,
    children: [
      {
        path: "/",
        element: <Portada />,
      },
      {
        path: "/comedia",
        element: <ListaPeliculas genero= 'comedia' key="comedia" />,
      },
      {
        path: "/independientes",
        element: <ListaPeliculas genero= 'independientes' key="independientes" />,
      },
      {
        path: "/clasicas",
        element: <ListaPeliculas genero= 'clasicas' key="clasicas" />,
      }
    ]
  },
  
  
  {
    path: "/ciencia-ficcion",
    element: <h2>Hola soy ciencia ficcion</h2>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
