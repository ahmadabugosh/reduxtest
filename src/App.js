import React, { Component } from 'react';
import {createStore} from 'redux';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;

const defaultState ={

  welcome:'Hi',
  otherstate:'some state'
}

const greeting =(state=defaultState, action)=>{
  switch(action.type)
  {
    case 'GREET_ME':
      return{...state, welcome:'Hello there'}
    case 'GREET_WORLD':
      return {...state,welcome:'Hello world'}
    default:
      return state;
  }


};
const store=createStore(greeting);

store.dispatch({type:'GREET_ME'})
console.log(store.getState());
