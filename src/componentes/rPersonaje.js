import { useEffect,useState } from "react"
import '../random.css'



export function Rper ({aj=[]}){

    let random =Math.floor(Math.random()*aj.length )
    
    const [Mm, setMm] = useState(true); 

    if(aj.length!==0){
    return <div className="cont">
            <button className="random-boton" onClick={()=>{Mm?setMm(false):setMm(true)}}></button>
            <div className="personaje">
                {<img src={aj[random].image}/>}
                <section>
                <h1>Nombre: {aj[random].name}</h1>
                <h1>Estado: {aj[random].status}</h1>
                </section>
            </div>
           </div>
    }
}