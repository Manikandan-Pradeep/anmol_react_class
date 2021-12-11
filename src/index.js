import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App'
import { Provider } from 'react-redux'
import OurStore from './redux/store'

ReactDOM.render( 
<Provider store={OurStore}>
    <Application />
</Provider> 
, document.getElementById('root'));