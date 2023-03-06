import LogoWhite from '../assets/images/logo-fundo-branco.png'
import '../styles/components/menu.css'

 type MenuProps = {
   TituloPage?: string;
 }
export function Menu(props: MenuProps){
    return(
       <div id="menu">
         <nav>
            <img src={LogoWhite} alt="logo campo topo" />
            <strong>{props.TituloPage || ''} </strong>
         </nav>
       </div>
    );
}