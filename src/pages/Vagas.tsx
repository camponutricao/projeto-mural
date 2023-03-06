import '../styles/vagas.css'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function Vagas(){
    
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() =>{
        clearTimeout(timeout.current);

        timeout.current = +global.setTimeout(() => {
        setTime((t) => t - 1); 
        }, 1000);

        if(time <= 0){
            navigate('/noticias');
        }
        return() => {
            clearTimeout(timeout.current);
        }
    }, [navigate, time]);

    return(
        <div id="page-vagas">
            <Menu TituloPage='Vagas'/>
            <Footer />
            <div className="profile-container">
                <ul>
                    <li>
                        <strong>Requisitos:</strong>
                        <p>- Ensino Médio Completo ou cursando ensino superior</p>
                        <p>- Excel básico</p>
                        <p>- Conhecimento em rotinas de transportadoreas será um diferencial</p>
                
                        <strong>Atividades:</strong>
                        <p>- Contratação de fretes;</p>
                        <p>- Captação de motoristas terceiros;</p>
                        <p>- Análise de mercado em cotação de fretes;</p>
                        <p>- Publicação de fretes via plataformas e listas de transmissão;</p>
                        <strong>Benefícios:</strong>
                        <p>- Bônus semestral por desempenho;</p>
                        <p>- Cartão Alimentação;</p>
                        <p>- Plano de saúde e odontógico;</p>
                        <p>- Seguro de vida em grupo;</p>
                        <p>- Salário compatível com o mercado;</p>
                        <strong>Currículo para:</strong>
                        <p>- talentos@camporacoes.com.br</p>
                        <p>- Vaga disponível também para PCP</p>
                        <p>- Vaga para Goiânia-GO</p>
                        <br />
                    </li> 
                    
                    <div className="name-vaga">
                       <strong>Nome Vaga</strong> 
                    </div>
                </ul>
            </div>
        </div>
    )
}