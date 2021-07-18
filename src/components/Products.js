import React from 'react';
import '../css/style.css'; 
import ps4 from '../assets/ps4_pro.jpg';
import ps5 from '../assets/img_ps5.png';
import xbox from '../assets/xbox.png';
import homem_aranha from '../assets/homem_aranha.png';
import capa_imt from '../assets/capa_immortals.jpg';
class Products extends React.Component{
    render(){
        return(
            <div id="products">
                <div id="conteiner">
                    <div className="product-card">
                        <img src={ps5} className="product-img" alt="Foto Playstation 5" />
                        <p className="name-product">Sony Playstation 5</p>
                        <p className="product-price">R$ 4199,00</p>
                    </div>
                    <div className="product-card">
                        <img src={xbox} className="product-img" alt="Foto do Xbox Series X" />
                        <p className="name-product">Microsoft Xbox Series X</p>
                        <p className="product-price">R$ 4499,00</p>
                    </div>
                    <div className="product-card">
                        <img src={capa_imt} className="product-img" alt="Foto da capa do Immortals" />   
                        <p className="name-product">Immortals Fenyx Rising - PS</p>
                        <p className="product-price">R$ 150,00</p>
                    </div>
                    <div className="product-card">
                        <img src={homem_aranha} className="product-img" alt="Foto da capa do Spider-Man" />
                        <p className="name-product">Spider-Man: Miles Morales - PS5</p>
                        <p className="product-price">R$ 180,00</p>
                    </div>
                    <div className="product-card">
                        <img src={ps4} className="product-img" alt="Foto do Playstatio 4 PRO" />
                        <p className="name-product">Sony Playstation 4 - PRO</p>
                        <p className="product-price">R$ 2599,00</p>
                    </div>
                </div>   
        </div>
        )
    }
}

export default Products;