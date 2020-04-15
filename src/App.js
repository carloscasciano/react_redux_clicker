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
      
      <ul>Objective: Conquer All Territories.</ul>
      <ul>Provinces are conquered by using legionaries.</ul>
      <ul>A click trains a roman legionary and passes a day.</ul>
      <ul>Every X days:</ul>
      <li>Provinces pay you gold</li>
      <li>Needed legionaries to conquer, grows</li>
      <ul>Gold is used to build improvements in Rome. When you buy a province, it prices double.</ul>
      <ul>Improvements give you enhancements:</ul>
      <li>Bridge: 1 extra legionary per click</li>
      <li>Roman Arch: +3pp of gold from provinces</li>
      <li>Aqueduct: -3pp on necessary legionaries</li>
      
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
