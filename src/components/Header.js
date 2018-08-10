import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from './Button';
import AddToDo from './AddToDo';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
  },
};

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Button onPress={() => alert('This is an Edit button!')}>Edit</Button>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
      <Button onPress={() => alert('This is an Add button!')}>Add</Button>
    </View>
  );
};


class AddTask extends Component {
    state = { text1: '' };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Add />
        </View>
      );
    }
  }

// Make the component available to other parts of the app

export default Header;
