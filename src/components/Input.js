import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 20,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 40,
    width: '100%',
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    width: 100,
    height: 20,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 100,
    height: 80,
  },
};

export default Input;
