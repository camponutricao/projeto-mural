import '../styles/mkt.css'
import Image1 from '../assets/images/img1.jpg'
import { Menu } from '../components/Menu'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Marketing (){
    const [time, setTime] = useState(3);
            const timeout = useRef(0);
            const navigate = useNavigate();

            useEffect(() =>{
                clearTimeout(timeout.current);

                timeout.current = +global.setTimeout(() => {
                setTime((t) => t - 1); 
                }, 7000);

                if(time <= 0){
                    navigate('/');
                }
                return() => {
                    clearTimeout(timeout.current);
                }
            }, [navigate, time]);

    return(
        <div id='page-content'>
            
            <Menu TituloPage='Incentivos Campo' />
            <div className='content-img'>
            <img src={Image1} alt="" />
            </div>
        </div>
    )
}