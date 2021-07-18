//import './App.css';
import React from 'react';
import FirstComponent from './components/FirstComponent';
import Products from './components/Products';
import Info from './components/Info';
import Footer from './components/Footer';

export default function App(){
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  return(
    <>
      <FirstComponent />
      <Products />
      <Info />
      <Footer />  
    </>
  )
}
/*
export default class App extends React.Component{
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
*/

