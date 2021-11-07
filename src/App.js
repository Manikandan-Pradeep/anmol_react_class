import React, { Component } from 'react';
import './App.css';
import { ChildHover, WithIncrementChildHover, WithIncrementPrintChildHover } from './ChildHover'
import { ChildClick, WithIncrementChildClick } from './ChildClick'

class App extends Component {
  render = () => {
    return (
        <div className="appContainer">
          <div className="wrapper">
            <ChildHover age={25}/>
            <WithIncrementChildHover age={25} company="infosys" list="due"/>
            <WithIncrementPrintChildHover age={25}/>
            <ChildClick/>
            <WithIncrementChildClick/>
          </div>
        </div>
    )
  }
}

export default App;