import './perso.css'
import {Per} from '../componentes/traePersonaje'
import { useState, useEffect } from 'react';



export const Perso =()=>{

    const [personajes, setPersonajes] = useState([]); 
    const fetchurl = 'https://rickandmortyapi.com/api/character'; 

    const fetchEfec = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setPersonajes(data.results))
    }
    
    useEffect(()=>{
        fetchEfec(fetchurl);
    }, [])


    return <div className="conteneedor">
                <div className='perso'>
                    <Per personajes = {personajes}/>
                </div>
           </div>
}