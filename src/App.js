import React, { useState } from 'react';
import './App.css';
import StateEffectChild from './StateEffectChild'
import RefChild from './RefChild'
import UseCallbackChild from './UseCallbackChild'

const App = (props) => {

  const [visible, setVisible] = useState(true)
  const [name, setName] = useState('Anmol')

  return (
    <div className="appContainer">
      {/* {visible ? <StateEffectChild name="Ram"/> : null}  */}
      {/* {visible ? <RefChild name={name}/> : null}  */}
      {visible ? <UseCallbackChild name="anmol"/> : null} 
      {/* <button onClick={() => setVisible(!visible)}>Parent Button</button> */}
    </div>
  )
}

export default App;