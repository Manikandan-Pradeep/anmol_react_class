import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import MainPageFunction from './components/MainPageFunction'

class App extends Component {
  
  render = () => {
    return (
        <div>
          <Header/>
          <MainPageFunction/>
          <Footer/>
        </div>
    )
  }
}

export default App;