import React from 'react';
//import Relogio from './Relogio';
import '../css/style.css';
import logo_black from '../assets/logo_black.webp';
/*
<div className="info-img">
                <img src={logo_black} alt="Logo da Black Friday" />
            </div>*/
export default class Info extends React.Component{
    render(){
        return(
        <div id="info"> 
            <div className="text-promo">
                <p>Assine e receba as melhores ofertas da Black Friday. Não quer ficar fora dessa, né?</p>
            </div>
            <div id="partners">
                <p>Confira as ofertas dos nossos parceiros</p>
                <nav className="partners-link">
                    <ul>
                        <li><a href="#">Amazon</a></li>
                        <li><a href="#">Kabum</a></li>
                        <li><a href="#">Aliexpress</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        )
    }
}