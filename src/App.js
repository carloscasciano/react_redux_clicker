import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './App.css';
import romanEmpire from './reducers/empireReducer'

// components
import Information from './components/Information';


function App() {

 //console.log(romanEmpire.getState()[0])

  return (
    <>
      <p>Roman Empire Clicker</p>
      <Information />
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
