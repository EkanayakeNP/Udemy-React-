//this need when use component
import React, { Component } from 'react';

//import React, { useState } from 'react'; //for functional component react 16.8 Hook

import logo from './logo.svg';
import './App.css';
import Radium from 'radium'; //for css
import Persion from './Persion/Persion';



class App extends Component {

  state = {
    Persions: [
      { id: 'rgbf', name: 'Nishantha', age: '25' },
      { id: 'dfv', name: 'Pradeep', age: '26' },
      { id: 'asd', name: 'Ekanayake', age: '27' }
    ],
    showPersion: false
  }


  //change name when entering textbox
  nameChangeHandler = (event, id) => {
    const persionIndex = this.state.Persions.findIndex(p => {
      return p.id === id;
    });

    //this type for good practics for prevent mutate javascript 
    const persion = {
      ...this.state.Persions[persionIndex]

    };

    //const persion=Object.assign({},this.state.Persions[persionIndex]);
    //end

    //console.log("persionIndex:"+persionIndex);

    persion.name=event.target.value;
    //console.log("persion.name :"+persion.name);
    const persions = [...this.state.Persions] // copy of original array
    persions[persionIndex]=persion; //update change updated 
    this.setState({ Persions: persions});

  }


  switchNameHandler = (event) => {
    // console.log('Was Clicked');
    //dont do this--- this.state.persions[0].name='NP';

    this.setState({
      Persions: [
        { name: 'NP', age: '25' },
        { name: 'Pradeep', age: '26' },
        { name: event.target.value, age: '31' }
      ]
    })
  };


  togglepersionshandler = () => {
    const doesShow = this.state.showPersion;
    this.setState({ showPersion: !doesShow });
  }

  deletePersionHandler = (persionIndex) => {
    // const persions = this.state.Persions; //this is bad practics,because need to take copy of original array and change values

    //const persions = this.state.Persions.slice(); // 1- same approach
    const persions = [...this.state.Persions] // 1- same approach
    persions.splice(persionIndex, 1);
    this.setState({ Persions: persions });
  }
  render() {
 
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{ //radium
        backgroundColor: 'lightgreen',
        color:'black'
      }
    };

    let persions = null;
    if (this.state.showPersion) {
      persions = (
        <div>
          {/* <Persion name={this.state.Persions[0].name} age={this.state.Persions[0].age} />
          <Persion name={this.state.Persions[1].name} age={this.state.Persions[1].age} />
          <Persion name={this.state.Persions[2].name} age={this.state.Persions[2].age} changed={this.switchNameHandler}>My hobbies: Racing</Persion> */}

          {
            this.state.Persions.map((persion, index) => {
              return <Persion
                click={() => this.deletePersionHandler(index)}
                name={persion.name}
                age={persion.age}
                key={persion.id}
                changed={(event) => this.nameChangeHandler(event, persion.id)}
              />
            })
          }
        </div>

      );

      style.backgroundColor='red'; //for dynamic styling
      style[':hover']={
        backgroundColor:'blue',
        color:'black'
      }
    }

    const classes =[];
    if(this.state.Persions.length<=2){
      classes.push('red');
    }
    if(this.state.Persions.length<=1){
      classes.push('bold');

    }
    return (
      <div className="App">
        <h1>Reat First App</h1>
        <p className={classes.join(' ')}>This is Realy Working</p>
        {/* <Persion name="Nishantha" age="25"/>
    <Persion name="Pradeep" age="28"/>
    <Persion name="Ekanayake" age="30">My hobbies: Racing</Persion> 
    */}
        {/*for state example */}

        {/*<button onClick={this.switchNameHandler}>Switch Name</button>*/}
        <button style={style} onClick={this.togglepersionshandler}>Switch Name</button>
        {persions}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am in React'))
  }
}

//export default App;
export default Radium(App); //when using radium for css

