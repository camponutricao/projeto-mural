import Logo from '../assets/images/logo.png'
import '../styles/components/footer.css'

export function Footer(){
    return(
        <div id='footer'>
            <footer>
                <img src={Logo} alt="logo campo topo" />
            </footer>
         </div>
    )
}