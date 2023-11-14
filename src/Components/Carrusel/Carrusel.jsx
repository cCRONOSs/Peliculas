import React from "react";
import {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import './Carrusel.css'




export default function CarruselComponent(){
    const [peliculaComedia, setPeliculaComedia] = useState([])
    const [peliculaIndependiente, setPeliculaIndependiente] = useState([])
    const [peliculaClasica, setPeliculaClasica] = useState([])
    
    useEffect(() => {
        fetch('https://api-pelis-back.onrender.com/comedia')
            .then(response => response.json())
            .then(data => {
                setPeliculaComedia(data.peliculas[0])
            })

            fetch('https://api-pelis-back.onrender.com/independientes')
            .then(response => response.json())
            .then(data => {
                setPeliculaIndependiente(data.peliculas[0])
            })

            fetch('https://api-pelis-back.onrender.com/clasicas')
            .then(response => response.json())
            .then(data => {
                setPeliculaClasica(data.peliculas[0])
            })
        
    }, []);
    
    
    
    
    
    return(
        <Carousel>
            <div>
                <img src={peliculaComedia.portada} alt="" />
            </div>
            <div>
                <img src={peliculaIndependiente.portada} alt="" />
            </div>
            <div>
                <img src="https://slp.gob.mx/secult/PublishingImages/Paginas/%E2%80%9CGrandes-cl%C3%A1sicos%E2%80%9D-en-la-Cineteca-Alameda/EL%20PADRINO,%20CARTEL.jpg" alt="" />
            </div>
        </Carousel>
    )
}

