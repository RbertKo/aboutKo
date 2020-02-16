import React from 'react';
import logo from './logo.svg';
import './App.css';

// layout
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
