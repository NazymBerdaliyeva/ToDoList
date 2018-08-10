import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';
import Input from './Input';

export default class AddToDo extends Component {
  state = { newTask: '' };
  static navigationOptions = {
    title: 'Add Task',
  };
  render() {
    return (
      <Card>
        <CardSection>
            <Input multiline
            placeholder="e.g., Go to grocery store"
            label="The Task"
            value={this.state.newTask}
            onChangeText={newTask => this.setState({ newTask })}
            />
        </CardSection>
      </Card>
    );
  }
}
