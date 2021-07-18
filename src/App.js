//import './App.css';
import React from 'react';
import FirstComponent from './components/FirstComponent';
import Products from './components/Products';
import Info from './components/Info';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <>
        <FirstComponent />
        <Products />
        <Info />
        <Footer />  
      </>
    )
  }
}

export default App;
