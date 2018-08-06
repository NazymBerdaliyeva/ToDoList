import React, { Component } from 'react';
import { Text, View, FlatList, Style, TouchableOpacity } from 'react-native';


class ToDoList extends Component {
  state = { tasks: [], newTask: ''};
  //const {containerStyle, itemStyle} = styles;
  render() {
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
            <TouchableOpacity onPress= {() => console.log('pressed!')}>
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
