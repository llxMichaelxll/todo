export function Per({personajes = []}){

    return <>
            {personajes.map((personaje, index) => (
             <div key={index}>
                <img src={personaje.image}/>
                <section>
                  <p>{personaje.name}</p>
                  <p>{personaje.status}</p>
                  <p>{personaje.species}</p>
                </section>
             </div>   
            ))}
           </>
}