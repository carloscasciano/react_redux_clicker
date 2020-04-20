import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import romanEmpire from './reducers/empireReducer'

// components
import GameArea from './components/GameArea'
import Enhancements from './components/Enhancements'
import Provincies from './components/Provincies'
import Rules from './components/Rules'
import { MainSkeleton, GameAreaSkeleton, RulesAreaSkeleton, VerticalDivider } from './styles'

function App() {

  return (
    <>

      <MainSkeleton>
        <GameAreaSkeleton>
          <GameArea />
        </GameAreaSkeleton>

        <VerticalDivider/>

        <RulesAreaSkeleton>

          <Rules/>
      
        </RulesAreaSkeleton>
      </MainSkeleton>

        
        <Enhancements />
        <Provincies />
      
      



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
