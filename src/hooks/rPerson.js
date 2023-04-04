import { useState, useEffect } from 'react';
import { Rper } from '../componentes/rPersonaje'



export const Rperso = () =>{

    const [rPsr, setRperso] = useState([])
    const url = "https://rickandmortyapi.com/api/character";

    const fetchurl = (url) =>{   
        fetch(url)
        .then(res => res.json())
        .then(data1 => setRperso(data1.results))
        .catch(error => console.error(error))  
        }
    useEffect(()=>{
        fetchurl(url);
    },[]);

    return <div>
               <Rper aj={rPsr}/>
           </div> 
}