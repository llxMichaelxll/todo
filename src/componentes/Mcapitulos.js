
import './mcapitulos.css'

export function Mcapitulos({a=[]}){
console.log(a)
    return <div className="Capitulos">
        {a.map((a, index)=>
        <div className='content' key={index}> 
            <h1>Nombre: {a.name}</h1>
            <h1>Episodio: {a.episode}</h1>
            <div className='urrl'>{a.url}</div>
        </div>
        )
        
        }
    </div>
}