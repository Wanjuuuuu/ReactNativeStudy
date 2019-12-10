import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Timer from './components/Timer';
import reducer from './reducer';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
