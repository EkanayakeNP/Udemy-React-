//this need when use component
//import React, { Component } from 'react';

import React, { useState } from 'react'; //for functional component react 16.8 Hook

import logo from './logo.svg';
import './App.css';
import Persion from './Persion/Persion';



const app = props => {

  const [personState, setPersionState] = useState({
    Persions: [
      { name: 'Nishantha', age: '25' },
      { name: 'Pradeep', age: '26' },
      { name: 'Ekanayake', age: '27' }
    ]
  //,  otherState:"Some other state"
  }
  );
  const [otherState,setOtherState] =useState('change other State');

  console.log(personState,otherState);

  const swichNameHandler = () => {
    setPersionState({
      Persions: [
        { name: 'NP', age: '25' },
        { name: 'Pradeep', age: '26' },
        { name: 'Ekanayake', age: '31' }
      ]
      //,otherState:personState.otherState
    })
  }

  const nameChangeHandler=(event)=>{
    setPersionState({
      Persions: [
        { name: 'NP', age: '25' },
        { name: 'Pradeep', age: '26' },
        { name: event.target.value, age: '31' }
      ]
      //,otherState:personState.otherState
    })
  }

  //for inline css
  const style={
    backgroundColor:'white',
    font:'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer'
  };

  return (
    <div className="App">
      <h1>Reat First App</h1>
      <button onClick={swichNameHandler} style={style}>Switch Name</button>
      <Persion name={personState.Persions[0].name} age={personState.Persions[0].age} />
      <Persion name={personState.Persions[1].name} age={personState.Persions[1].age} />
      <Persion name={personState.Persions[2].name} age={personState.Persions[2].age} changed={nameChangeHandler}>
        My hobbies: Racing
        </Persion>

    </div>
  );

}
export default app;

