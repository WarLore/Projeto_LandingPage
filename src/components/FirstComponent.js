import React from 'react';
import '../css/style.css';
export default class FirstComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            email: ''
        }

        this.changeName = (e) => {
            this.setState({nome: e.target.value})
            console.log(this.state.nome)
        }
        
        this.changeEmail = (e) => {
            this.setState({email: e.target.value})
            console.log(this.state.email)
        }
        this.handleSubmit = (e) => {
            if(this.state.email === ''){
                window.alert('Por favor, informe seu email.')
            } else{
                e.preventDefault();  
                localStorage.setItem('email-storage', this.state.email)
                localStorage.setItem('name-storage', this.state.nome)
                window.alert('Email cadastrado, você receberá as ofertas e novidades em breve.')
            }
            
          }
    }
    render(){
        return(
            <div id="first">
                <div className="title">
                    <h1>Busca suprir o desejo por jogos de uma maneira economica?</h1>
                    <p>Então assine o nosso NewsLetter e tenha acesso exclusivo as nossas promoções e novidades.</p>
                </div>
                <div className="form">
                    <form>
                        <label for="name">Informe seu nome</label>
                        <input type="text" id="name" className="input-text" value={this.state.nome} onChange={this.changeName} />
                            
                        <label for="email">Informe seu email</label>
                        <input type="email" id="email" className="input-text"   value={this.state.email} onChange={this.changeEmail} />

                        <input type="submit" className="input-submit"  value="INSCREVER" onClick={this.handleSubmit} />
                    </form>      
                </div>
            </div>
        )
    }
}
