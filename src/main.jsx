import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Sections/Home/Home.jsx'
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
        element: <h1>Hola soy hijo del Home</h1>,
      },
      {
        path: "/comedia",
        element: <ListaPeliculas />,
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
