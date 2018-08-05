import React, { Component } from 'react';
import { Text, View, FlatList, Style, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ToDoList extends Component {
  state = { tasks: [], newTask: ''};
  //const {containerStyle, itemStyle} = styles;
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            renderItem={({item}) => (
            <TouchableOpacity onPress= {() => console.log('Pressed!')}>
              <Text style={styles.itemStyle}>{item.key}</Text>
            </TouchableOpacity>
          )
        }
            removeClippedSubviews={false}
          />
      </View>
    );
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
    flex: 1,
  },
  itemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 1,
  },
};
const RootStack = createStackNavigator(
    {
      Home: {screen : ToDoList },
      Details: {screen: DetailScreen },
    },
    {
      initialRouteName: 'Home',
    }
);

  export default class App extends Component {
    render() {
      return (
        <RootStack />
      );
    }
  }
