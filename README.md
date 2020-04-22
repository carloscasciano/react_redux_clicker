
Project Steps for a Clicker Game with React and Redux.


Before starting, ask yourself if you should be using Redux in projects. With 2019 Hooks and context API, Redux seems to be less used nowadays, however, many companies still develop projects with state containers and understanding Flux, Store and Data Log concepts can be a good idea. This is the motivation behind this project.

You can find the DEMO here and the full CODE here.


	Steps:


Game Rules
Boilerplate 
Basic Structure
Actions
Components
Simple Styling

1. Game Rules

As Roman emperor, a user trains legionaries to conquer territories. When the user conquers 15 territories, he beats the game. 


Basic Rules Set:
Conquer territory by spending Legionaries;
A click trains legionaries and passes a day in-game;
On tribute day, provinces pay you gold and necessary legionaries to conquer a new territory rises;
Gold is used to buy enhancements;
Enhancements give bonus:
1 Legionary per Bridge
+ 3 percentual points on tribute gold per Arc
- 3 percentual points on legionaries needed per Aqueduct


	2. Boilerplate

	Created with  npx create-react-app 
	Dependencies used:

   "react": "^16.13.1",
   "react-dom": "^16.13.1",
   "react-redux": "^7.2.0",
   "react-scripts": "3.4.1",
   "redux": "^4.0.5",
   "styled-components": "^5.1.0"

	
	3. Basic Structure

	Inside empireReducer.js


	One starting object representing the initial game state. All necessary states are here: current number of legionaries, current gold, current date, days until tribute, current displayed message for the user, an object that holds the three enhancements and quantity of each, price counters to be used in calculations, provinces inside an object with name and boolean representing possession and an array to receive user actions.

const startGameRomanEmpire = [
   {
     "legionaries": 1,
     "gold": 100,
     "date": 1,
     "daysUntilActionsChange": 14,
     "message": "Grow your Empire!",
     "enhancements": [...],
     "baseProvincePrice": 25,
     "provincePriceWithBonus": 0,
     "baseProvinceGold": 100,
     "provinceGoldWithBonus": 0,
     "provinces": [
       {
         "provinceName": "Rome",
         "possession": true
       },
       {
           "provinceName": "Africa",
           "possession": false
       },
       {
           "provinceName": "Crete",
           "possession": false
       },
       ...     
],
     "roundLog": []
   }
 ]

	This structure is passed through a reducer that performs some basic calculations following game logic and serves the responses for 5 possible actions. All game logic is based on these actions (to be detailed on next topics). 
The store is created with this reducer and exported for app usage.

const empireReducer = (state = startGameRomanEmpire, action) => {
 ...
   switch (action.type) {
        case 'PASS_TURN':
           ...

       case 'ADD_LEGIONARIES':
           ...

       case 'ADD_ENHANCEMENT':
           ...

       case 'CONQUER_PROVINCE':
           ...

       case 'ALERT_USER':
           ...

       default:
       return state
     }
 }

 const romanEmpire = createStore(empireReducer)
 export default romanEmpire


On App.js , provider and store are imported...

import { Provider } from 'react-redux'
import romanEmpire from './reducers/empireReducer'

… and inside render, we provide the entire store to be used anywhere in this App component. We call this render and subscribe store to it.

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

4. Actions

In actions.js, provide the functions that will return objects with proper type and date, like the examples below. These functions will be called inside components, to dispatch our state change via reducer actions. It is this simple.

export const addLegionaries = () => {
   return (
       {
           type: "ADD_LEGIONARIES"
       }
   )
}

export const addEnhancement = (enhancementName) => {
   return (
       {
           type: "ADD_ENHANCEMENT",
           data: {
               enhancementName: enhancementName
           }
       }
   )
}

5. Components

To read our store current data and use our actions/dispatchers inside any component, first we import connect from react-redux. This will call for a connection, which as the name says, connects a component to a store.

import { connect } from 'react-redux'

Then, call functions to get information from the store. In the example below we are getting legionaries and gold value from store.

const mapStateToProps = (state) => {
   return {
       legionaries: state[0].gold,
       gold: state[0].gold
   }
}



And we can use it inside our functional components as props, without regular props drilling. As example:

function Example(props) {
   return (
       <div>
           <p>{props.gold}</p>
           <p>{props.legionaries}</p>

       </div>
   )
}



To pass our dispatches to components, it works in a similar way as getting props. We dispatch actions as elements of an object...

 
import { addLegionaries, passTurn } from '../actions/actions'

const mapDispatchToProps = dispatch => {
   return {
       addLegionariesDispatcher: () => {
           dispatch(addLegionaries())
           dispatch(passTurn())
       }
   }
}
 

… and uses it as props as well:

function AnotherExample(props) {
   return (
       <>
           <button onClick={props.addLegionaries} />
       </>
   )
}

When this button is clicked, addLegionariesDispatcher is called from mapDispatchToProps and dispatches addLegionaries() and passTurn() to the store reducers, changing initial state and re-rendering screen.

Inside the store reducers, we will have this functions:
       case 'ADD_LEGIONARIES':
           state[0]["legionaries"] = state[0]["legionaries"] + 1
           return state

       case 'PASS_TURN':
           state[0]["date"]++
           return state

 One important issue is HOW you export the component. The usual export default ComponentName will not be enough. There is a necessity of passing down the maps with stores and dispatchers as well, like this:

export default connect(
   mapStateToProps,
   mapDispatchToProps,
   null,
   {
       pure: false
   }
)(ExampleComponent)

As in docs: https://react-redux.js.org/api/connect, connect takes 4 arguments:

function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

So, passing props function as the first argument, dispatchers as second, nothing as third and a tip: the object with pure:false is important to state your object as not pure and keep the screen rendering, as deeply explained here.

6. Logging

	As the user plays, it can notice the log accumulating information. This is simply done by adding whatever information you want inside actions. In this case, we are not sending store information to a server, but the logic INSIDE react-app is the same. For example, this is the code from CONQUER_PROVINCE action inside reducer:

       case 'CONQUER_PROVINCE':

           const chosen Province = action.data.provinceName  
           const provinceToConquer = state[0]["provinces"].filter(prov=>prov.provinceName===chosen Province)[0]
           provinceToConquer["possession"] = true

           state[0]["legionaries"] = state[0]["legionaries"] - state[0].provincePriceWithBonus

           state[0]["roundLog"] = state[0]["roundLog"].concat("Day " + state[0]["date"] + " : " + provinceToConquer["provinceName"] + " conquered")
           return state

Here what happens:
Get province name from data inside action
Filter object inside data structure
Subtract needed legionaries
Post date and province name to Log array


7. Simple Styling

	Just some basic component styling with https://styled-components.com/. Not much to say here as it is another subject. But some examples on styles.js :

	This component only appears when the user beats the game, check display as example. If component has parameter win within component, it renders:

export const WinningConditionSkeleton = styled.div`
   display: ${props => props.win ? "flex" : "none"};
   height: 80px;
   width: 100%;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`


In component below, we get if all provinces are captured via props, and only render component if conquered left is 0 :

   if (allConquered === 0) {
       return (
         <div>
             <WinningConditionSkeleton win >
                <p>Congratulations! You won the game in {props.date} days! </p>     
              </WinningConditionSkeleton>
           </div>
       )
   }
   return (
       <div>
           <WinningConditionSkeleton />
       </div>
   )
}


	8. Summary

Having only one possible entrance to change your data state (via actions) makes your app more secure, predictable and organized. There are different ways of achieving this with other techniques, but many companies still use Redux, so it is valid to understand its principles and history.


 

