import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';

// font awesome
import '../node_modules/@fortawesome/fontawesome-free/scss/solid.scss'
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'

// layout
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from "./components/layout/Footer";
import {headerContext} from "./contexts";

const handleClick = () => {
    console.log('test')
}

const App = () => {
    const test = useContext(headerContext);
    console.log({test})
  return (
    <div className="App">

      <Header handleClick={handleClick}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
