import { Outlet } from "react-router-dom";
import Portada from "../Portada/Portada.jsx"
import ListaPeliculas from "../moviesList/moviesList.jsx";
//import Button from 'react-bootstrap/Button';


export default function Home(){
    return(
        <>
           {/* MENU, Portada, Lista de peliculas, footer */} 
           <Portada />
           {/*<ListaPeliculas/>*/}
           <Outlet />

        </>

    )
}

