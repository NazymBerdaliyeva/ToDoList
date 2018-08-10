import React, { Component } from 'react';
import { Text, View, FlatList, Style, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './Header';
import Button from './Button';

const util = require('util');

class ToDoList extends Component {
  static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
        headerTitle: 'To Do',
        headerRight: (
          <Button
            onPress={() => navigation.navigate('Second')} >
            Add
          </Button>
        ),
      };
    };
   state = { newTask: '' };
  render() {
    console.log(require('util').inspect(this.props.navigation, false, null ));
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.containerStyle}>
          <FlatList
            data={[
              {key: 'Family'},
              {key: 'Sport'},
              {key: 'Health & Fitness'},
              {key: 'New habits'},
              {key: 'Work'},
              {key: 'Career'},
              {key: 'Shopping'},
            ]}
            renderItem={({item}) =>
            <TouchableOpacity onPress= {() => console.log('Pressed!')}>
              <Text style={styles.itemStyle}>{item.key}</Text>
            </TouchableOpacity>}
          />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 22,
    alignSelf: 'stretch',
    marginLeft: 50,
    flexGrow: 1,
  },
  itemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
};

export default ToDoList;
