import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconeMissao from '../assets/images/Icone_Missao.svg'
import IconeVisao from '../assets/images/Icone_Valores.svg'
import IconeValores from '../assets/images/Icone_Visao.svg'
import { Menu } from '../components/Menu'
import '../styles/home.css'
import Data from '../files/Mural_Campo_.json'

export function Home(){
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();
    
    useEffect(() =>{
        clearTimeout(timeout.current);

        timeout.current = +global.setTimeout(() => {
        setTime((t) => t - 1); 
        }, 2000);

        if(time <= 0){
            
             Data.nivermes.map((nvmesInfo) => {
                
                 if(parseInt(nvmesInfo.matricula) > 0) {
                     navigate('/nivermes')
                 }else if(parseInt(nvmesInfo.matricula) === 0 ){
                    Data.mural.map((muralInfo)=>{
                        if(parseInt(muralInfo.id) === 0){
                            navigate('/')
                        }else{
                            navigate('/noticias')
                        }
                    })
                 } 
                     
             })}

        return() => {
            clearTimeout(timeout.current);
        }
    }, [navigate, time]);

    return(
      <div id="page-home">
        <Menu />
        <div className="missao">
            <img src={IconeMissao} alt="Nossa missão" />
            <strong> 
               <h2> MISSÃO</h2> 
            </strong>
            <p>
            Desenvolver, produzir e comercializar produtos e serviços de nutrição animal, de forma sustentável, gerando valor para os nossos clientes e para a nossa empresa.

            </p>
        </div>

        <div className="visao">
            <img src={IconeVisao} alt="Nossa visão" />
            <strong> 
                <h2>VISÃO</h2>
            </strong>
            <p>
            Ser referência no mercado de nutrição animal por meio da busca incessante pela excelência e ampliação da presença geográfica.
            </p>
        </div>

        <div className="valores">
            <img src={IconeValores} alt="Nossos valores" />
            <strong> 
               <h2>VALORES</h2> 
            </strong>
            <p>
            TRANSPARÊNCIA nos negócios, CONFIANÇA nas pessoas e HUMILDADE em tudo que faz.
            </p>
        </div>
      </div>  
    )

}