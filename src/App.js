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


// TESTS
import {addLegionaries} from './actions/actions'

function App() {

 
  const testingStore = () => {
    romanEmpire.dispatch(addLegionaries())
  }


  return (
    <>
      <p>Roman Empire Clicker</p>
      <div style={{display: "flex", justifyContent:"space-around"}}>
        <button onClick={testingStore}>TESTER</button>
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
