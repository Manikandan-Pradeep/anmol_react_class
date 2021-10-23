import React, { Component } from 'react';
import './App.css';
import Parent from './ParentComponent'

class App extends Component {

  constructor(){
    super()
    this.state = {
      ages : [10,20,50,70]
    }
    console.log('Mounting Start App')
  }

  // static getDerivedStateFromProps(props, state) {
  //     console.log('Derive App', props, state)
  // }

  componentDidMount() {
    console.log('Mounting App Done')
    // const newAges = [this.state.ages[0]+1, this.state.ages[1]+1, this.state.ages[2]+1, this.state.ages[3]+1]
    // this.setState({
    //   ages: newAges
    // })
  }

  componentDidUpdate() {
    console.log('Updating App Done')
  }

  clickHandler = () => {
    // setInterval(() => {
    //   const newAges = [this.state.ages[0]+1, this.state.ages[1]+1, this.state.ages[2]+1, this.state.ages[3]+1]
    //   this.setState({
    //     ages: newAges
    //   })
    // }, 100000)
    const newAges = [this.state.ages[0]+1, this.state.ages[1]+2, this.state.ages[2]+20, this.state.ages[3]+5]
    this.setState({
      ages: newAges
    })
  }


  render = () => {
    console.log('Render App')
    return (
      <div className="appContainer">
        <Parent age={this.state.ages[0]}/>
        <Parent age={this.state.ages[1]}/>
        <Parent age={this.state.ages[2]}/>
        <Parent age={this.state.ages[3]}/>
        <button onClick={this.clickHandler}>Change Ages</button>
      </div>
    )
  }
}

export default App;