import React, { Component } from 'react';
import Child from './Child'
import ChildText from './ChildText'
import ChildShouldUpdate from './ChildShouldUpdate'
import ChildGetDerived from './ChildGetDerived'
import ChildFuncProp from './ChildWithFunctionAsProp'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  changeName = (nameFromChild = '') => {
    this.setState({
      name: nameFromChild ? nameFromChild : 'Changed From Parent'
    })
  }

  render = () => {
    console.log('Name state: ', this.state.name)
    return (
        <div className="appContainer">
          <div className="childContainer">
            <Child/>
          </div>
          <div className="childContainer">
            <Child/>
          </div>
          {/* <div className="childContainer">
            <ChildText/>
          </div> */}
          <div className="childContainer">
            <ChildShouldUpdate/>
          </div>
          <div className="childContainer">
            <ChildGetDerived childName={this.state.name}/>
          </div>
          <div className="childContainer">
            <div>{this.state.name}</div>
            <button onClick={() => this.changeName()}>Change Name</button>
            <button onClick={() => this.setState({
              name: this.state.name
            })}>Do Not Change Name</button>
          </div>
          <div className="childContainer">
            {
              this.state.name === '' ? <ChildFuncProp childName={this.state.name} changeParentName={this.changeName}/> : null
            }
          </div>
        </div>
    )
  }
}

export default App;