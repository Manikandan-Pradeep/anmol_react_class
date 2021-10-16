import React, { Component, Fragment } from 'react';
import './App.css';
import { Child, Child2 } from './Export'

class App extends Component {
  render = () => {
    return (
        <>
          <div className="asdknasdl">
            This is a Parent
            <Child></Child>
          </div>
          <div className="asdknasdl">
            This is a Parent
            <Child></Child>
          </div>
        </>
      // React.createElement('div', {className: 'asdknasdl'}, (
      //   React.createElement(Child, null, 'This is Child' )
      // ))
    )
  }
}

export default App;