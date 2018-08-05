/** @format */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ToDoList from './src/components/ToDoList';

const App = () => (
  <View>
    <Header headerText="To Do" />
    <ToDoList />
  </View>
);
// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

AppRegistry.registerComponent('todolist', () => App);
