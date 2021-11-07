import React, { Component, createRef } from 'react';
import './App.css';
import Child from './Child'

class App extends Component {

  constructor(props) {
    super(props)
    this.reference = createRef()
    this.sample = null
    this.childRef = null
  }

  componentDidMount() {
    if(this.reference.current) {
      this.reference.current.value = 'Name of a state'
      this.reference.current.focus()
      }
    if(this.sample) {
      this.sample.value = 'Second Method Ref'
      this.sample.focus()
      this.sample.onclick = (e) => {
        console.log('Clicked this from handling ref')
      }
    }


    if(this.childRef){
      // console.log(this.childRef.name)
      // this.childRef.printThis('Random string')
      this.childRef.focus()
    }
    
    
  }

  assignRef = (nodalValue) => {
    this.sample = nodalValue
  }

  render() {
    return (
      <div className="appContainer">
        <div className="wrapper">
          <h1>Title</h1>
          <input id="12312" ref={this.reference}></input>
          <input ref={this.assignRef} onClick={(e) => console.log('Clicked this from inline handling')}></input>
          <button>Click me</button>
          <Child name="Manikandan" ref={(node) => {
            this.childRef = node
          }}/>
          <Child name="Anmol" ref={(node) => {
            this.childRef = node
          }}/>
        </div>
      </div>
    )
  }
}

export default App;