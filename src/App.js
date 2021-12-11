import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './components/MainPage'

class App extends Component {
  
  render = () => {
    return (
        <div>
          <Header/>
          <MainPage/>
          <Footer/>
        </div>
    )
  }
}

export default App;