/** @format */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToDoList from './src/components/ToDoList';
import AddToDo from './src/components/AddToDo';

const Navigation = StackNavigator({
  First: { screen: ToDoList },
  Second: { screen: AddToDo },
});



AppRegistry.registerComponent('todolist', () => Navigation);
