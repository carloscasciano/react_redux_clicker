### React Redux Clicker - Roman Empire


#### Text

React and Redux clicker game and logic tutorial.
Should you use Redux?
Log.
Flux archtecture.

Game Rules, adapt to your needs / reality:

- Main Objective: Conquer all provinces.
- Provinces are conquered by using legionaries.
- A click trains you a roman legionary and passes a day.
- Every 30 days: [Provinces pay you gold / Improvements prices doubles / Necessary Legionary doubles]
- Gold can be used to build improvements in Rome.
- Improvements give you enhancements.


- Legionaries will be gathered in groups:
    - Contuberniun : 8 Legionaires
    - Century : 10 Contuberniun
    - Cohort : 6 Centuries
    - Legion: 10 Cohorts

- Improvements:
    - Bridge: 1 extra legionary per click
    - Roman Arch: +1pp of gold from provinces
    - Aqueduct: -1pp on necessary legionaries


Step 1 - Boilerplate

- Create React App

```npx create-react-app```

Get rid of basic info.


- Styled Components

```npm install --save styled-components```

- Install Redux and React-Redux

```npm install redux```
```npm install react-redux```


Step 2 - Basic Structure

create base db
create store
export store
renderapp on app.js and subscribe
print store with getState()


Step 3 - Components


Information Area
Rules
Command Central
Army
Provincies
Enhancents

provider from react-redux lib
connect

mapStateToProps
mapDispatchToProps



Extras:

Roman organization: https://www.youtube.com/watch?v=Rcbedan5R1s