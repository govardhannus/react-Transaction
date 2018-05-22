import React, { Component } from 'react';
import Router from './routes/index'
import {Provider} from 'react-redux';
import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'



class App extends Component {
  render() {
    return (
          <Router/>
    );
  }
}

export default App;
