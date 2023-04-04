import "../abajo.css"
import youtubelogo from '../assets/img/yotube-logo.png'
import faceboock from '../assets/img/faceboock-logo.png'
import correo from '../assets/img/correo-logo.jpg'


export function Abajo(){
    return <footer className="abajo">
                <p>Copyright © Todos los derechos reservados</p>
                <div>
                    <a href="https://www.youtube.com/" target={"_blank"}><img src={youtubelogo}/></a>
                    <a href="https://es-la.facebook.com/" target={"_blank"} ><img src={faceboock}/></a>
                    <a href="https://accounts.google.com/Login?hl=Es" target={"_blank"}><img src={correo}/></a>
                </div>
            </footer>
}