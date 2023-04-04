import { useState,useEffect } from "react";
import { Mcapitulos } from "../componentes/Mcapitulos";


export const Capitulos=()=>{
    const[capi, setCapi] = useState([]);

    const url = 'https://rickandmortyapi.com/api/episode'
    const fetchurl = (url) =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setCapi(data.results))
    }
    useEffect(()=>{
        fetchurl(url)
    },[])

    return <><Mcapitulos a={capi}/></>
}