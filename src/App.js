import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './App.css';
import romanEmpire from './reducers/empireReducer'

// components
import Information from './components/Information'
import CommandCentral from './components/CommandCentral'
import Army from './components/Army'
import Enhancements from './components/Enhancements'
import Provincies from './components/Provincies'


function App() {

  return (
    <>
      <p>Roman Empire Clicker</p>
      <div style={{display: "flex", justifyContent:"space-around"}}>
        <Information />
        <CommandCentral />
        <Army />
        <Enhancements />
        <Provincies />
      </div>
      
    </>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <Provider store={romanEmpire}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  )
}

renderApp()
romanEmpire.subscribe(renderApp)
export default App;
