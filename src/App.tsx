import React, {useContext, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

// font awesome
import '../node_modules/@fortawesome/fontawesome-free/scss/solid.scss'
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'

// layout
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from "./components/layout/Footer";

import HeaderContext, { sideReduce } from './contexts/side'

const App = () => {
    const sideReducer = useReducer(sideReduce, {isSpreaded: false})

    return (
        <HeaderContext.Provider value={sideReducer}>
            <div className="App">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </HeaderContext.Provider>
    );
}

export default App;
