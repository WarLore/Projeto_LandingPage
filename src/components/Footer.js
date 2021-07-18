import React from 'react';
import '../css/style.css';
import logo_github from '../assets/logo_github.png';
import logo_linkedin from '../assets/logo_linkedin.png';

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p>&copy;Todos os direitos reservados a Edmilson Lino</p>
                <div id="social-network">
                    <a href="https://github.com/WarLore" target="_blank"><img src={logo_github} className="logo-github" alt="Logotipo do GitHub" /></a>
                    <a href="https://www.linkedin.com/in/edmilson-lino" target="_blank"><img src={logo_linkedin} ClassName="logo-linkedin" alt="Logotipo do Linkedin" /></a>
                </div>
            </footer>
        )
    }
}
