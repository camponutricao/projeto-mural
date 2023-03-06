import '../styles/nvmes.css'
import { Menu } from '../components/Menu'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../files/Mural_Campo_.json'


export function Nvmes(){
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() =>{
        clearTimeout(timeout.current);

        timeout.current = +global.setTimeout(() => {
        setTime((t) => t - 1); 
        }, 8000);

        if(time <= 0){
            Data.niverdia.map((nvdiaInfo)=>{
                if(parseInt(nvdiaInfo.matricula) > 0){
                    navigate('/niverdia')
                }else if(parseInt(nvdiaInfo.matricula) === 0){
                    Data.mural.map((muralInfo)=>{
                        if(parseInt(muralInfo.id) === 0){
                            navigate('/')
                        }else{
                            navigate('/noticias');
                        }
                    })
                }
            })
            
        }
        return() => {
            clearTimeout(timeout.current);
        }
    }, [navigate, time]);
    
    const display = Data.nivermes.map((info)=>{
        return(
            <ul>
                <li>
                    <div>
                        <object className='teste' data={'https://app.camponutricao.com.br/img-mural/'+info.matricula+'.JPG'} type="image/JPG">
                        <img src={'https://app.camponutricao.com.br/img-mural/avatar.png'} alt="" />
                        </object>   
                    </div>
                    <strong>Departamento</strong>
                    <p> {info.departamento}</p>
                    <div className="linha"></div>
                    <strong>Dia Aniversário</strong>
                    <p>{info.dia}</p>
                    <br />
                </li> 
                
                <div className="nome-funcionario">
                    <strong>{info.nome}</strong>
                </div>
            </ul>
        )
    })

    return(
        <div id="page-niver-mes">
            <Menu TituloPage='Aniversariantes do mês' />
            <div className="profile-container-nvmes">
                {display}
            </div>
        </div>
    )
}
