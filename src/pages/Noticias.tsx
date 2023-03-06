import '../styles/noticias.css'
import { Menu } from '../components/Menu'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../files/Mural_Campo_.json';

export function Noticias(){
     const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() =>{
        clearTimeout(timeout.current);

        timeout.current = +global.setTimeout(() => {
        setTime((t) => t - 1); 
        }, 5000);

        if(time <= 0){
            navigate('/');
        }
        return() => {
            clearTimeout(timeout.current);
        }
    }, [navigate, time]);

    const display = Data.mural.map((muraInfo)=>{
        return(
            <div className='content-cards'>
                <div className='head-card'>
                    <h1>{muraInfo.titulo}</h1>
                </div>
                <p>{muraInfo.mensagem}</p>
            </div>
        )
    })

    return(
        <div id="page-noticias">
            <Menu TituloPage='Notícias' />          
            <div className="page-noticias-content">
               {display}
            </div>
        </div>
    )
}